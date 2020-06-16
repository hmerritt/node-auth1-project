const bcrypt = require("bcryptjs");
const Users = require("../db/Users");

module.exports = (req, res, next) => {
    console.log("session", req.session);

    // Check if user is logged-in
    if (req.session && req.session.user) {
        next();
    } else {
        res.status(401).json({ message: "You shall not pass!" });
    }
};
