const express=require("express");
const routes=require("./routes/router");
const app=express();
app.use(express.json());
app.use("/api",routes);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})
