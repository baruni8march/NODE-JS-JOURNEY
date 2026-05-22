let nextId = 2;

const todos = [
    {
        id: 1,
        title: "Learn structured backend",
        completed: false
    }
];

function getAllTodos(req, res) {
    res.status(200).json({
        success: true,
        todos: todos
    });
}

function getSingleTodo(req, res) {
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
}

function createTodo(req, res) {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title is required"
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
}
function deleteTodo(req, res) {
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
}
function updateTodo(req, res) {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const todo = todos.find((item) => {
        return item.id === id;
    });
    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "Todo not found"
        });
    }
    else{
        todo.title = title !== undefined ? title : todo.title;
        todo.completed = completed !== undefined ? completed : todo.completed;

        res.status(200).json({
            success: true,
            message: "Todo updated",
            todo: todo
        });
    }
}
module.exports = {
    getAllTodos,
    getSingleTodo,
    createTodo,
    deleteTodo,
    updateTodo
    
};