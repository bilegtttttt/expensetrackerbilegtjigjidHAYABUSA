import fs from "fs";
import { makeHash } from "../../utils/password-hash.js";
const user =
  "/Users/23LP7255/Library/CloudStorage/OneDrive-NestcoreLLC/INCOME-EXPENSIVE/backend-income-expensive/models/users.json";
console.log(user);
export const newBaachka = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return "username or email or password bhgui bn";
    }

    const newUserFile = await fs.readFileSync(user, "utf-8");

    const oldUserFile = JSON.parse(newUserFile);

    const foundUser = oldUserFile.find((user) => user.email === email);

    if (foundUser) {
      return "user already exist";
    }
    ///////HASH

    const userPassHash = makeHash(password);

    oldUserFile.push({ username, email, password: userPassHash });

    await fs.writeFileSync(user, JSON.stringify(oldUserFile));
    return "success";
  } catch (error) {
    throw new Error(error.message);
  }
};
