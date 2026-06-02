const{
    gettodo,
    gettodobyid,
    createtodo,
    deletetodo,
    updatetodo
}=require("../controller/todocontroller");
const express=require("express");
const router=express.Router();

router.get("/todos",gettodo);
router.get("/todos/:id",gettodobyid);
router.post("/todos",createtodo);
router.delete("/todos/:id",deletetodo);
router.put("/todos/:id",updatetodo);

module.exports=router;