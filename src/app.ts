import express from "express";
import { Application } from "express";
import router from "./router";

const app: Application = express();
const port: number = 8080;

app.use(express.json());
app.use("/", router);

app.listen(port, (): void => console.log(`Server listening on port ${port}`));
