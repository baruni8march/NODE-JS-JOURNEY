const express=require("express");
const app=express();

app.get("/",(req,res)=>{
     res.send("Hello from my first server");
});

app.get("/about", (req, res) => {
    res.send("This is about page");
});

app.get("/contact",(req,res)=>{
    res.send("Contact me at backend journey");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});