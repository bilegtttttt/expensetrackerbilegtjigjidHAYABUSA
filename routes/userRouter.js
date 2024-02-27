import express from "express";
import { getUserByEmailService } from "../controllers/usersController.js";
import { getAllUserrr } from "../controllers/usersController.js";
import { newAccount } from "../controllers/usersController.js";
// import { isAutherized } from "../middleware/isValidUser.js";
import { logIn } from "../queries/user/logIn.js";
import { loginService } from "../controllers/usersController.js";
import { isThisTokenValid } from "../middleware/checkToken.js";

const userRouter = express.Router();
// : paramsiiig helne
userRouter.get("/users/:email", isThisTokenValid, getUserByEmailService);
userRouter.get("/users", getAllUserrr);
userRouter.post("/login", loginService);
userRouter.post("/create", newAccount);

export default userRouter;
