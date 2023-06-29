import express from "express";
import { Application } from "express";
import "dotenv/config";
import mongoose from "mongoose";

import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import indexRouter from "./router/indexRouter";
import jobsRouter from "./router/jobsRouter";
import authRouter from "./router/authRouter";

const app: Application = express();

const port: number = +process.env.PORT || 5000;
const path: string = "/api";

app.use(`${path}`, indexRouter);
app.use(`${path}/auth`, authRouter);
app.use(`${path}/jobs`, jobsRouter);

app.use(notFound);
app.use(errorHandler);
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/devjobs");

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
