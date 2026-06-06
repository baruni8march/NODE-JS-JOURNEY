/*const sqlite3=require("sqlite3").verbose();
const db=new sqlite3.Database("./todos.db");
 */
const {Pool} =require("pg");
const pool=new Pool({
    user:"postgres",
    host:"localhost",
    database:"todosdb",
    password:"postgressneha",
    port:5432
});
/*
db.run(`
    CREATE TABLE IF NOT EXISTS todos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT 0
    )
    `);

*/

async function createTable(){
    const query=`
    CREATE TABLE IF NOT EXISTS todos(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    completed BOOLEAN DEFAULT false
    )
    `;
    await pool.query(query);
}
createTable()
    .then(()=>console.log("Todos table ready"))
    .catch(err=>console.error("Table creation failed",err));

module.exports=pool;