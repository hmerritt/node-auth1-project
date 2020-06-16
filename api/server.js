const express = require("express");
const session = require("express-session");

const registerRouter = require("./routes/registerRouter");
const loginRouter = require("./routes/loginRouter");
const usersRouter = require("./routes/usersRouter");
const restricted = require("./auth/restricted-middleware");

const server = express();

const sessionConfig = {
    name: "monster",
    secret: "super-duper secret",
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
};

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", restricted, usersRouter);

// Fallback server error message
server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Somthing went wrong",
    });
});

module.exports = server;
