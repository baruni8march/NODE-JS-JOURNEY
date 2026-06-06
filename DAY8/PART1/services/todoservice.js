const pool=require("../database");
async function getalltodoservice(){
    const result=await pool.query("SELECT * FROM todos");
    return result.rows;
}
async function createtodoservice(title){
    const result=await pool.query(
        "INSERT INTO todos (title,completed) VALUES($1,$2) RETURNING * ",[title, false]
    );
    return result.rows[0];
}
module.exports={
    getalltodoservice,
    createtodoservice
};