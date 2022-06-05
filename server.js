const express = require("express");

const PORT = process.env.PORT || 3004;
const app = express();

const apiRoutes = require("./routes")
const inputCheck = require("./utils/inputCheck");
const db = require("./db/connection.js");
const runApp = require("./index")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", apiRoutes);

app.use((req,res) => {
    res.status(404).end();
});

db.connect(err => {
    if(err) throw err;
    console.log("Database connected.");
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);

    });
});