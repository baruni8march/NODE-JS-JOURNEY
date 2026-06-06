const{
   getalltodoservice,
   createtodoservice
}=require("../services/todoservice")

async function getalltodos(req,res){
    try{
        const todos=await getalltodoservice();
        res.status(200).json({
            success:true,
            todos:todos
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Database error"
        });
    }
}


async function createtodo(req,res){
    const title=req.body.title;
    if(!title){
        return res.status(400).json({
            success:false,
            message:"Title missing"
        });
    }
    try{
        const newtodo=await createtodoservice(title);
         res.status(201).json({
            success:true,
            todo:newtodo
        });
    }
    catch(err){
         res.status(500).json({
            success:false,
            message:"Database error"
        });
    }
}

module.exports={
    getalltodos,
    createtodo
};