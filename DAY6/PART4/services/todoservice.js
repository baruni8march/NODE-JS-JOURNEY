const db=require("../database");

function getalltodosservice(callback){
    db.all("SELECT * FROM todos",callback);
}

function createtodoservice(title,callback){
    db.run(
        "INSERT INTO todos (title,completed) VALUES(?,?)",
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
    getalltodosservice,
    createtodoservice
}