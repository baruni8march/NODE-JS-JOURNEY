const {
    getalltodos,
    createtodo,
    gettodobyid,
    deletetodo
} =require("../controllers/todocontroller");
const express=require("express");
const router=express.Router();
router.get("/todos",getalltodos);
router.get("/todos/:id",gettodobyid);
router.post("/todos",createtodo);
router.delete("/todos/:id",deletetodo);
module.exports=router;