const db=require("../database");
function getalltodosservice(callback){
    db.all("SELECT * FROM todos",callback);
}
function createtodoservice(title,callback){
    db.run("INSERT INTO todos (title,completed) VALUES (?,?)",[title,0],
    function(err){
        if(err){
          return callback(err);
        }
        else{
           callback(null,{
            id:this.lastID,
            title:title,
            completed:0
           });
        }
    });
}

function gettodobyidservice(id,callback){
    db.get("SELECT * FROM todos WHERE id = ?",[id],callback);
}

function deletetodoservice(id,callback){
    db.run("DELETE FROM todos WHERE id=?",[id],callback);
}
module.exports={
    getalltodosservice,
    createtodoservice,
    gettodobyidservice,
    deletetodoservice
}