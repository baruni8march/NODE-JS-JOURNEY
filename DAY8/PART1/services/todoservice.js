const pool=require("../database");

async function getalltodoservice(){
    const result=await pool.query("SELECT * FROM todos");
    return result.rows;
}

async function createtodoservice(title){
    const result=await pool.query(
        "INSERT INTO todos (title,completed) VALUES($1,$2) RETURNING *",
        [title,false]
    );
    return result.rows[0];
}

async function gettodobyidservice(id){
    const result=await pool.query(
        "SELECT * FROM todos WHERE id=$1",
        [id]
    );
    return result.rows[0];
}

async function updatetodoservice(id,title,completed){
    const result=await pool.query(
        "UPDATE todos SET title=$1, completed=$2 WHERE id=$3 RETURNING *",
        [title,completed,id]
    );
    return result.rows[0];
}

async function deletetodoservice(id){
    const result=await pool.query(
        "DELETE FROM todos WHERE id=$1 RETURNING *",
        [id]
    );
    return result.rows[0];
}

module.exports={
    getalltodoservice,
    createtodoservice,
    gettodobyidservice,
    updatetodoservice,
    deletetodoservice
};