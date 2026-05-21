// TEST OR PRACTICE

const express = require("express");

const app = express();

app.use(express.json());

let nextId = 2;

const todos = [
    {
        id: 1,
        title: "Learn REST API",
        completed: false
    }
];

app.get("/", (req, res) => {
    res.send("Todo CRUD API running");
});

app.get("/todos", (req, res) => {
    res.status(200).json({
        success: true,
        todos: todos
    });
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find((item) => {
        return item.id === id;
    });

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    res.status(200).json({
        success: true,
        todo: todo
    });
});

app.post("/todos", (req, res) => {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title required"
        });
    }

    const newTodo = {
        id: nextId++,
        title: title,
        completed: false
    };

    todos.push(newTodo);

    res.status(201).json({
        success: true,
        message: "Todo created",
        todo: newTodo
    });
});

app.put("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find((item) => {
        return item.id === id;
    });

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    if (req.body.title !== undefined) {
        todo.title = req.body.title;
    }

    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }

    res.status(200).json({
        success: true,
        message: "Todo updated",
        todo: todo
    });
});

app.delete("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = todos.findIndex((item) => {
        return item.id === id;
    });

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }

    todos.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Todo deleted"
    });
});

app.listen(4000, () => {
    console.log("System running on port 4000");
});