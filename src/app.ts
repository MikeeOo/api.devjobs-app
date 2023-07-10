import express, { Application } from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middlewares/errorMiddleware";
import indexRouter from "./router/indexRouter";
import jobsRouter from "./router/jobsRouter";
import authRouter from "./router/authRouter";

const app: Application = express();
connectDB();

const port: number = +process.env.PORT || 5000;
const path: string = "/api";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(`${path}`, indexRouter);
app.use(`${path}/auth`, authRouter);
app.use(`${path}/jobs`, jobsRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
