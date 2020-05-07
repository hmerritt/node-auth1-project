const express = require('express');
// const projectsRouter = require("./routes/projectsRouter");

const server = express();

server.use(express.json());

module.exports = server;
