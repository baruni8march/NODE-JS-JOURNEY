const express=require("express");
//Import express package
const app=express();
//create server app
app.get("/",(req,res)=>{ //create route
    //means:when client send GET request  run this func
    res.send("Hello from server"); //send response to client
});

app.listen(3000,()=>{ //start server on port 3000
    //port means door number of server
    //you gotta open localhost:3000
    console.log("Server running on port 3000");
});

//MENTAL MODE:
// Browser
// ↓ request
// localhost:3000/
// ↓
// Express server
// ↓ response
// "Hello from server"