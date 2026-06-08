const {
    getalltodoservice,
    createtodoservice,
    gettodobyidservice,
    updatetodoservice,
    deletetodoservice
} = require("../services/todoservice");

// GET all todos
async function getalltodos(req,res){
    let completed=req.query.completed;
    const search=req.query.search;
    let limit=req.query.limit;

    if(completed!==undefined){
        completed=completed==="true";
    }

    if(limit!==undefined){
        limit=Number(limit);
    }

    try{
        const todos=await getalltodoservice(completed,search,limit);
        res.status(200).json({
            success:true,
            todos:todos
        });
    }
    catch(err){
        res.status(500).json({
            success:false,
            message:"Database error"
        });
    }
}

// POST create todo
async function createtodo(req, res) {
    const title = req.body.title;
    if (!title) {
        return res.status(400).json({ success: false, message: "Title missing" });
    }
    try {
        const newtodo = await createtodoservice(title);
        res.status(201).json({ success: true, todo: newtodo });
    } catch (err) {
        res.status(500).json({ success: false, message: "Database error" });
    }
}

// GET todo by ID
async function gettodobyid(req, res) {
    const id = Number(req.params.id);
    try {
        const todo = await gettodobyidservice(id);
        if (!todo) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, todo });
    } catch (err) {
        res.status(500).json({ success: false, message: "Database error" });
    }
}

// PATCH update todo
async function updatetodo(req, res) {
    const id = Number(req.params.id);
    const { title, completed } = req.body;
    if (title === undefined || completed === undefined) {
        return res.status(400).json({ success: false, message: "Title or completed is missing" });
    }
    try {
        const updated = await updatetodoservice(id, title, completed);
        if (!updated) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, todo: updated });
    } catch (err) {
        res.status(500).json({ success: false, message: "Database error" });
    }
}

// DELETE todo
async function deletetodo(req, res) {
    const id = Number(req.params.id);
    try {
        const deleted = await deletetodoservice(id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "Todo not found" });
        }
        res.status(200).json({ success: true, message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ success: false, message: "Database error" });
    }
}

module.exports = { getalltodos, createtodo, gettodobyid, updatetodo, deletetodo };