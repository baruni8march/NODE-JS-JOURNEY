const {
    getalltodosservice,
    gettodobyidservice,
    createtodoservice,
    deletetodoservice,
    updatetodoservice
} = require("../services/service");

function getalltodos(req, res) {
    const todos = getalltodosservice();

    res.status(200).json({
        success: true,
        todos: todos
    });
}

function gettodobyid(req, res) {
    const id = Number(req.params.id);

    const todo = gettodobyidservice(id);

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "todo not found"
        });
    }

    res.status(200).json({
        success: true,
        todo: todo
    });
}

function createtodo(req, res) {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "title is required"
        });
    }

    const newtodo = createtodoservice(title);

    res.status(201).json({
        success: true,
        message: "todo created",
        todo: newtodo
    });
}

function updatetodo(req, res) {
    const id = Number(req.params.id);

    const title = req.body.title;
    const completed = req.body.completed;

    const todo = updatetodoservice(id, title, completed);

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "todo not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "todo updated",
        todo: todo
    });
}

function deletetodo(req, res) {
    const id = Number(req.params.id);

    const deleted = deletetodoservice(id);

    if (!deleted) {
        return res.status(404).json({
            success: false,
            message: "todo not found"
        });
    }

    res.status(200).json({
        success: true,
        message: "todo deleted"
    });
}

module.exports = {
    getalltodos,
    gettodobyid,
    createtodo,
    updatetodo,
    deletetodo
};