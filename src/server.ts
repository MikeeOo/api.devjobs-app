import express from "express";

import router from "./router";

const server = express();
const port = 8080;

server.use("/", router);

server.listen(port, () => console.log(`Server listening on port ${port}`));
