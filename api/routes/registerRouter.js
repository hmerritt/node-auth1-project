const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/", async (req, res, next) => {
    // Get user info from request body
    const user = req.body;

    // Hashed password
    const hash = bcrypt.hashSync(user.password, 12);

    // Replace plain-text pass with hashed one
    user.password = hash;

    //
    // add user to db
});

module.exports = router;
