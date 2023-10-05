import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/dbConfig.js";
import authRouter from "./routers/authRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true
}))

// connect to DB
connectDB();

app.use("/api/auth", authRouter);
app.use("/", userRouter);

export default app;
