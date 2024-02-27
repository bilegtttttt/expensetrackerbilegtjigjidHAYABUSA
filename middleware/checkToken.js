import jwt from "jsonwebtoken";

export const isThisTokenValid = (req, res, next) => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJpbGVndEBnbWFpbC5jb20iLCJpZCI6IjEyMyIsImlhdCI6MTcwNzE5Mzk4MSwiZXhwIjoxNzA3MjgwMzgxfQ.yMw5pSrCO4jSIZQWYKqqSiCzg_7NN1CQHs-dHrIFhPQ";
  jwt.verify(token, "secret", (err, res) => {
    if (err) {
      console.log(err);
      res.status(401).send("token isn't exist.");
    } else {
      console.log(res);
      next();
    }
  });
};
