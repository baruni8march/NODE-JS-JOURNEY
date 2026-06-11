const express = require("express");
const router = express.Router();

const authController = require("../controllers/authcont");

router.post("/register", authController.registerUser);

module.exports = router;