import express from "express";
import { Application } from "express";
// import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import router from "./router";

// const corsOptions = {
//     origin: "http://127.0.0.1:5173/",
// };

dotenv.config();

const app: Application = express();

const port: number = +process.env.PORT;

// app.use(cors(corsOptions));

app.use((req, res, next) => {
    // res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
    // res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept"
    // );
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use(express.json());
app.use("/", router);

mongoose.connect("mongodb://localhost:27017/devjobs");

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
