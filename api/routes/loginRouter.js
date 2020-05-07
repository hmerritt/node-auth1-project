const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../db/Users");

const router = express.Router();

router.post("/", async (req, res, next) => {
    // Get user info from request body
    const user = req.body;

    // Get user from db (by username)
    Users.findBy(user.username, "username")
        .then(([dbUser]) => {
            // Compare password with one stored in db
            if (dbUser && bcrypt.compareSync(user.password, dbUser.password)) {
                res.send({ hello: dbUser.username });
            } else {
                // Passwords did not match :(
                res.status(401).json({ message: "invalid credentials" });
            }
        })
        .catch((error) => {
            next(error);
        });
});

module.exports = router;
