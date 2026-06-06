const express = require("express");
const { getalltodos, createtodo } = require("../controllers/todocontroller");
const router = express.Router();

router.get("/todos", getalltodos);
router.post("/todos", createtodo);

module.exports = router;