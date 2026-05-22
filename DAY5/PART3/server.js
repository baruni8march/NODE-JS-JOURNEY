const express=require('express');
const app=express();

const todoRoutes=require("./routes/todoRoutes");
app.use(express.json());
app.use("/api",todoRoutes);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
});