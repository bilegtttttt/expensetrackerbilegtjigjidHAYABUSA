import fs from "fs";
import jwt from "jsonwebtoken";
import { compareHash } from "../../utils/password-hash.js";
const userDb =
  "/Users/23LP7255/Library/CloudStorage/OneDrive-NestcoreLLC/INCOME-EXPENSIVE/backend-income-expensive/models/users.json";

export const logIn = async (req, res) => {
  try {
    const { email: userEmail, password: pass } = req.body;
    console.log(userEmail, pass);

    const allUsersJson = JSON.parse(fs.readFileSync(userDb, "utf-8"));

    const checkedUser = allUsersJson.find(({ email }) => email === userEmail);
    if (!checkedUser) {
      throw new Error("User doesnt exit");
    }
    const password = compareHash(pass, checkedUser.password);

    ////////token

    if (password) {
      const token = jwt.sign(
        { email: "bilegt@gmail.com", id: "123" },
        process.env.JWT_SECRET || "defaultSecret",
        { expiresIn: "1d" }
      );
      return { checkedUser, token };
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
