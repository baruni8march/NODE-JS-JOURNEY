const express=require('express');
const {
    getalltodos,
    gettodobyid,
    createtodo,
    updatetodo,
    deletetodo
}=require("../controllers/todoController");
const router=express.Router();
router.get("/todos",getalltodos);
router.get("/todos/:id",gettodobyid);
router.post("/todos",createtodo);
router.delete("/todos/:id",deletetodo);
router.put("/todos/:id",updatetodo);

module.exports=router;