const express=require("express");
const app=express();
app.use(express.json());
const routes=require("./routes/todoroutes");
app.use("/api",routes);
require("./database");
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});