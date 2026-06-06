const express = require("express");
const app = express();
app.use(express.json());

const todoroutes = require("./routes/todoroutes");
require("./database"); // now connects to PostgreSQL

app.use("/api", todoroutes);

app.listen(3001, () => console.log("Server running on port 3001"));