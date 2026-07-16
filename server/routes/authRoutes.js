const express = require("express");
const router = express.Router();

const { loginUser } = require("../controllers/authController");

router.get("/login", (req, res) => {
    res.send("Login route working");
});

router.post("/login", loginUser);

module.exports = router;