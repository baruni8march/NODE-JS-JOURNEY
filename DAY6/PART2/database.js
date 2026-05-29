const sqlite3 = require("sqlite3").verbose();
//This imports SQLite
const db = new sqlite3.Database("./todos.db", (err) => { //this connects with database
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
// `......` is a template literal string

/*CREATE TABLE IF NOT EXISTS todos (...):
Create todos table only if it does not already exist.
*/

/*
id INTEGER PRIMARY KEY AUTOINCREMENT.Means:
id is number
unique for every row
auto increases: 1, 2, 3...
*/

/*
title TEXT NOT NULL.Means:
title is text
cannot be empty
*/

/*
completed BOOLEAN DEFAULT 0.Means:
completed is true/false style
default is 0, meaning false
*/

module.exports = db;