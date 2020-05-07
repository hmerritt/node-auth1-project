const express = require("express");
const registerRouter = require("./routes/registerRouter");
// const loginRouter = require("./routes/loginRouter");
// const usersRouter = require("./routes/usersRouter");

const server = express();

server.use(express.json());
server.use("/api/register", registerRouter);
// server.use("/api/login", loginRouter);
// server.use("/api/users", usersRouter);

// Fallback server error message
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Somthing went wrong",
    });
});

module.exports = server;
