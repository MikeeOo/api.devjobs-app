import express from "express";

const server = express();
const port = 8080;

server.get(`/`, (req, res) => {
    res.json(`Hello World!`);
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
