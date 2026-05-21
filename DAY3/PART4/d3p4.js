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

app.post("/todos",(req,res)=>{
    const title=req.body.title;
    if(title){
        const newTodo={
            id:todos.length+1,
            title:title,
            completed:false
        };
        todos.push(newTodo);
        res.status(201).json({"success":true,"todo":newTodo});
    }else{
        res.status(400).json({"success":false,"message":"Title is required"});
    }
});







app.listen(3009,()=>{
    console.log("Server running on port 3009");
});