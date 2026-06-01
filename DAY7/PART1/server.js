const express=require("express");
const app=express();
const routes=require("./routes/todoroutes");
app.use(express.json());
app.use("/api",routes);
require("./database");
app.listen(4001,()=>{
    console.log("Server running on port 4001");
})