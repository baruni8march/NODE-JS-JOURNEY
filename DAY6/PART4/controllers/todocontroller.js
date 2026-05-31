const {
    getalltodosservice,
    createtodoservice
}=require("../services/todoservice");

function getalltodos(req,res){
   getalltodosservice((err,rows)=>{ if(err){
        return res.status(500).json({
            success:false,
            message:"Database erro"
        });
    }
    res.status(200).json({
        success:true,
        todos:rows
    });
});
}

function createtodo(req,res){
    const title=req.body.title;
    if(!title){
        return res.status(400).json({
            success:false,
            message:"Tilte is required"
        });
    }
    createtodoservice(title,(err,newtodo)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:"Database insert failed"
            });
        }
        res.status(201).json({
            success:true,
            message:"todo created",
            todo:newtodo
        });
    });
}

module.exports={
    getalltodos,
    createtodo
}