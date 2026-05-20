const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home route");
});

app.get("/user", (req, res) => {
    res.json({
        name: "Riddhi",
        skill: "Node.js",
        day: 3
    });
});

app.get("/status", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Server working fine"
    });
});

// status sets the response status code like the state of the current response.common status code:
//Status code tells the client/frontend what happened with the request.
// 200 = success
// 201 = created
// 400 = bad request
// 401 = unauthorized
// 404 = not found
// 500 = server error

app.get("/profile",(req,res)=>{
    res.json(
        { username: "admin",
    learning: "Express routes",
    progress: "Day 3 Part 2"}
);
});

app.listen(3002, () => {
    console.log("Server running on port 3002");
});