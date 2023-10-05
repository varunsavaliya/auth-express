import express from "express";
import { authenticateUser } from "../middlewares/authenticateUser.js";
import { profile } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.get("/", authenticateUser, profile);
export default userRouter;
