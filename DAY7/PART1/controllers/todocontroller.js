const {
    getalltodosservice,
    createtodoservice,
    gettodobyidservice,
    deletetodoservice
} = require("../services/todoservice");

function getalltodos(req, res) {
    getalltodosservice((err, rows) => {
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
}

function createtodo(req, res) {
    const title = req.body.title;

    if (!title) {
        return res.status(400).json({
            success: false,
            message: "Title required"
        });
    }

    createtodoservice(title, (err, newtodo) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Insertion to database failed"
            });
        }

        res.status(201).json({
            success: true,
            message: "Todo created",
            todo: newtodo
        });
    });
}

function gettodobyid(req, res) {
    const id = Number(req.params.id);

    gettodobyidservice(id, (err, todo) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: "Database access failed"
            });
        }

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
}

function deletetodo(req,res){
    const id = Number(req.params.id);

    deletetodoservice(id, function(err){
        if(err){
            return res.status(500).json({
                success:false,
                message:"Database access failed"
            });
        }

        if(this.changes === 0){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Todo deleted"
        });
    });
}
module.exports = {
    getalltodos,
    gettodobyid,
    createtodo,
    deletetodo
};