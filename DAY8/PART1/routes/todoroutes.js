const express = require("express");
const { getalltodos, createtodo, updatetodo,deletetodo,gettodobyid } = require("../controllers/todocontroller");
const router = express.Router();

router.get("/todos", getalltodos);
router.get("/todos/:id", gettodobyid);
router.post("/todos", createtodo);
router.put("/todos/:id", updatetodo);
router.delete("/todos/:id", deletetodo);
module.exports = router;