const express = require("express");
const router = express.Router();

const db = require("../db/connection");
const inputCheck = require("../utils/inputCheck");


function getAllDepartments(callback) {
    const sql = `SELECT * FROM departments`;

    db.query(sql, (err,rows) => {
        if (err) {
            callback({
                status: "error",
                message: err.message
            })
            return;
        }
        callback({
            status: "success",
            data: rows
        })
    });
}

function createDepartment(name, callback) {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [name];

    db.query(sql, params, (err, result) => {
        if (err) {
            callback({
                status: "error",
                message: err.message
            })
            return;
        }
        callback({
            status: 'success',
            data: result
        });
    });
}

function deleteDepartment(id, callback) {

    const sql = `DELETE FROM departments WHERE id = ?`;
    const params = [id];

    db.query(sql, params, (err, result) => {
        if (err) {
            callback({
                status: "error",
                message: err.message
            })
        } else if (!result.affectedRows) {
            callback({
                status: "error",
                message: 'Department not found'
            })
        } else {
            callback({
                status: 'success',
                "changes": result.affectedRows
            });
        }
    });
};

module.exports = {
    getAllDepartments,
    createDepartment,
    deleteDepartment,
}