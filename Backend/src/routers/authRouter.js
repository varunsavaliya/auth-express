import express from "express";
import { login, signup } from "../controllers/authController.js";
import { signupDataValidate } from "../middlewares/signupDataValidate.js";
import { loginDataValidate } from "../middlewares/loginDataValidate.js";

const authRouter = express.Router();

authRouter.post("/signup", signupDataValidate, signup);
authRouter.post("/login", loginDataValidate, login);

export default authRouter;
