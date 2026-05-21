const express=require("express");
const app=express();

app.use(express.json());
const todos=[
    {
        id:1,
        title:"Learn Express",
        completed:false
    }
];

app.get("/",(req,res)=>{
    res.send("Todo API running");
});

app.get("/todos",(req,res)=>{
    res.status(200).json({"success":true,"todos":todos});
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find((item) => {
        return item.id === id;
    });

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    res.status(200).json({
        success: true,
        todo: todo
    });
});
 let nextId = 2;

app.post("/todos",(req,res)=>{
    const title=req.body.title;
    if(title){
        const newTodo={
            id:nextId++,
            title:title,
            completed:false
        };
        todos.push(newTodo);
        res.status(201).json({"success":true,"todo":newTodo});
    }else{
        res.status(400).json({"success":false,"message":"Title is required"});
    }
});

app.delete("/todos/:id",(req,res)=>{
    const id=Number(req.params.id);
    const index = todos.findIndex((item) => {
    return item.id === id;
});
     if(index===-1){
        return res.status(404).json({
             "success": false, 
             "message": "Todo not found"
        });
     }
     else{
        todos.splice(index,1);
        res.status(200).json({
            "success": true,
            "message": "Todo deleted successfully"
        });
     }
});

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);
    const todo = todos.find((item) => {
        return item.id === id;
    });

    if(!todo){
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    if(req.body.title !== undefined) {
        todo.title = req.body.title;
    }

    if(req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }

    res.status(200).json({
        success: true,
        message: "Todo updated",
        todo: todo
    });
});

//atfirst find if by const todo=todos.find((item)=>{
// return item.id==index});
//then check atfirst if it doesnt exist then return a json with the status 404 and with two keys success and message
//next if found then update the stuffs
//lastly u must also send a json message with status 200 and success:true and message also the todo u updated thatsit

app.listen(3011,()=>{
    console.log("Server running on port 3011");
});