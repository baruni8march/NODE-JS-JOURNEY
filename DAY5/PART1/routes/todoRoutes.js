const express=require("express");
const {getTodos}=require("../controllers/todoController");

// const controller = require("../controllers/todoController");
// const getTodos = controller.getTodos;
//    So these two are equivalent:
// const { getTodos } = require("../controllers/todoController");

const router=express.Router();

router.get("/todos",getTodos);

module.exports=router;
