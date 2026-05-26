const express = require("express");

const db = require("./database"); //v.v.imp

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("SQLite Todo API running");
});

app.listen(6000, () => {
    console.log("Server running on port 6000");
});