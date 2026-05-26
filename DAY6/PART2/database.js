const sqlite3 = require("sqlite3").verbose();
//This imports SQLite
const db = new sqlite3.Database("./todos.db", (err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err.message);
    } else {
        console.log("Connected to SQLite database");
    }
});

db.run(`
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        completed BOOLEAN DEFAULT 0
    )
`);

module.exports = db;