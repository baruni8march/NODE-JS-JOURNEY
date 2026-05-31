const express=require("express");
const app=express();
app.use(express.json());
const todoroutes=require("./routes/todoroutes");
require("./database");
//This makes sure database/table setup runs when server starts.
app.use("/api",todoroutes);
app.listen(3001,()=>{
    console.log("Server running on port 3001");
})