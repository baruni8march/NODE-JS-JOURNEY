const db=require("../database");

function gettodoservice(callback){
    db.all("SELECT * FROM todos",callback);
}

function gettodobyidservice(id,callback){
    db.get("SELECT * FROM todos WHERE id = ?",[id],callback);
}

function deletetodoservice(id,callback){
    db.run("DELETE FROM todos WHERE id = ?",[id],callback);
}

function updatetodoservice(id,title,completed,callback){
    db.run(
        "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
        [title,completed,id],
        callback
    );
}

function createtodoservice(title,callback){
    db.run(
        "INSERT INTO todos (title,completed) VALUES (?,?)",
        [title,0],
        function(err){
            if(err){
                return callback(err);
            }

            callback(null,{
                id:this.lastID,
                title:title,
                completed:0
            });
        }
    );
}

module.exports={
    gettodoservice,
    gettodobyidservice,
    createtodoservice,
    deletetodoservice,
    updatetodoservice
};