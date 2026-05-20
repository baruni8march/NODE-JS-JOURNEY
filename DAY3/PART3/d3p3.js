const express=require("express");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("D3P3 server is running");
});

app.post("/login",(req,res)=>{
    ///login is not automatically a page.It is a backend route.
    const username=req.body.username;
    const password=req.body.password;

    if(username==="RIDDHI" && password==="1234"){
        res.status(200).json({
            success:true,
            message:"Login successful"
        });
    }
    else{
        res.status(401).json({
            success:false,
            message:"Invalid credentials"
        });
    }

});
app.post("/register", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (name && email) {
        res.status(201).json({
            success: true,
            message: "Registration done",
            user: {
                name: name,
                email: email
            }
        });
    } else {
        res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }
});


app.listen(3006,()=>{
    console.log("Server running on port 3006");
});