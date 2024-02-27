import cors from "cors";
import userRouter from "./routes/userRouter.js";
import pg from "pg";

import express from "express";

const CONNECTION_STRING =
  "postgresql://bbilegt379:ki4qNs6WERvO@ep-holy-hill-a1echk0v.ap-southeast-1.aws.neon.tech/incomeDB?sslmode=require";

export const client = new pg.Client({
  connectionString: CONNECTION_STRING,
});

const dbInit = async () => {
  await client.connect();
  await CreateUserTable();
};
const app = express();
app.use(express.json());
app.use(cors());

dbInit();

const CreateUserTable = async () => {
  const userTableCreateQuery = `CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    age SMALLINT
  )`;

  await client.query(userTableCreateQuery);
};

// refactored create user function ene hna bga ve gher controller => userquery
const createUser = async (username, email, password, age) => {
  const userCtreateQuery = `
  INSERT INTO users (username, email, password, age) VALUES ($1, $2, $3, $4) RETURNING id
  `;
  const userID = await client.query(userCtreateQuery, [
    username,
    email,
    password,
    age,
  ]);
  return userID;
};

app.post("/Sign", async (req, res) => {
  const { username, email, password, age } = req.body;

  try {
    const userID = await createUser(username, email, password, age);
    console.log(userID);
    res.send(userID);
  } catch (error) {
    console.log(error);
  }
});

app.get("", async (req, res) => {
  res.send("working JIGJID");
});

///OMNOKH CODE

const port = 8000;

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
