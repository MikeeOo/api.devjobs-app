import express from "express";
import { Application } from "express";
import "dotenv/config";
import mongoose from "mongoose";
import indexRouter from "./router/indexRouter";
import jobsRouter from "./router/jobsRouter";
import userRouter from "./router/userRouter";

const app: Application = express();

const port: number = +process.env.PORT || 5000;
const path: string = "/api";

app.use(express.json());

app.use(`${path}`, indexRouter);
app.use(`${path}/u`, userRouter);
app.use(`${path}/j`, jobsRouter);

mongoose.connect("mongodb://localhost:27017/devjobs");

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
