const express = require("express");

const db = require("./database");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("SQLite Todo API running");
});

app.get("/todos", (req, res) => {
    db.all("SELECT * FROM todos", (err, rows) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database error"
            });
        }

        res.status(200).json({
            success: true,
            todos: rows
        });
    });
});

app.post("/todos", (req, res) => {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
        });
    }

    db.run(
        "INSERT INTO todos (title, completed) VALUES (?, ?)",
        [title, 0],
        function (err) {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: "Database insert failed"
                });
            }

            res.status(201).json({
                success: true,
                message: "Todo created",
                todo: {
                    id: this.lastID,
                    title: title,
                    completed: 0
                }
            });
        }
    );
});

app.listen(6000, () => {
    console.log("Server running on port 6000");
});