const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password : "Willie28!",
        database: "workforce"
    },
    console.log("Connected to the workforce database.")
);

module.exports = db;