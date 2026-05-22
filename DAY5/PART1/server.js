const express=require("express");
const todoRoutes=require("./routes/todoRoutes");
//importing route file
const app=express();

app.use(express.json());

app.use("/api",todoRoutes);
//connecting routes to server.js
//meaning:All routes inside todoRoutes will start with /api
//So if todoRoutes.js has:
//router.get("/todos", ...)
//Final URL becomes:/api/todos

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})