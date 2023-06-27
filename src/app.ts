import express from "express";
import { Application } from "express";
import "dotenv/config";
import mongoose from "mongoose";

import router from "./router";

const app: Application = express();

const port: number = +process.env.PORT;

app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb://localhost:27017/devjobs");

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
