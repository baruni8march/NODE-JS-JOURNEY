const{
    gettodoservice,
    gettodobyidservice,
    createtodoservice,
    updatetodoservice,
    deletetodoservice
}=require("../services/todoservice");

function gettodo(req,res){
    gettodoservice((err,rows)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:"Database access got denied"
            });
        }
        res.status(200).json({
            success:true,
            todos:rows
        });

    });
}

function gettodobyid(req,res){
    const id=Number(req.params.id);
    gettodobyidservice(id,(err,todo)=>{
        if(err){
               return res.status(500).json({
                success:false,
                message:"Database access got denied"
            });
        }
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"todo not found"
            });
        }
        res.status(200).json({
                success:true,
                todo:todo
            });
    });
}

function createtodo(req,res){
    const title=req.body.title;
    if(!title){
        return res.status(400).json({
                success:false,
                message:"title not present"
            });
    }
    createtodoservice(title,(err,newtodo)=>{
        if(err){
            return res.status(500).json({
                success:false,
                message:"Database error"
            });
        }
        res.status(201).json({
                success:true,
                message:"todo created",
                todo:newtodo
               
            });
    });
}

function deletetodo(req,res){
    const id=Number(req.params.id);
    deletetodoservice(id,function(err){
        if(err){
        return res.status(500).json({
                success:false,
                message:"Database access got denied"
            });}
            if(this.changes===0){
                return res.status(404).json({
                success:false,
                message:"todo not found"
            });
            }
             res.status(200).json({
                success:true,
                message:"todo deleted"
            });
    });
}

function updatetodo(req,res){
    const id=Number(req.params.id);
    const title=req.body.title;
    const completed=req.body.completed;
   if(title === undefined || completed === undefined){
        return res.status(400).json({
                success:false,
                message:"title/status missing"
            });
    }
    updatetodoservice(id,title,completed,function(err){
        if(err){
            return res.status(500).json({
                success:false,
                message:"Database access got denied"
            });
        }
        if(this.changes===0){
            return res.status(404).json({
                success:false,
                message:"todo not found"
            });
        }
        res.status(200).json({
                success:true,
                message:"todo updated"
            });
    });
}

module.exports={
    gettodo,
    gettodobyid,
    createtodo,
    deletetodo,
    updatetodo
}