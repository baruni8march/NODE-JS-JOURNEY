const express=require('express');
const {
    getAllTodos,
    getSingleTodo,
    createTodo,
    deleteTodo,
    updateTodo
}=require("../controllers/todoController");
const router=express.Router();
router.get("/todos",getAllTodos);
router.get("/todos/:id",getSingleTodo);
router.post("/todos",createTodo);
router.delete("/todos/:id",deleteTodo);
router.put("/todos/:id",updateTodo);

module.exports=router;