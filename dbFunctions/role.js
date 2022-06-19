const express = require("express");
const router = express.Router();

const db = require("../db/connection");
const inputCheck = require("../utils/inputCheck");

function getAllRoles(callback) {
    const sql = `SELECT roles.*, departments.name 
                    AS department_name 
                    FROM roles 
                    LEFT JOIN departments
                    ON roles.department_id = departments.id;`;

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
        });
    });
};

function createRole(title, salary, department_id, callback) {

    const sql = `INSERT INTO roles (title, salary, department_id)
    VALUES (?,?,?)`;
    const params = [title, salary, department_id];

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
};

function deleteRole(id, callback) {

    const sql = `DELETE FROM roles WHERE id = ?`;
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
             message: 'Role not found'
        });
        } else {
            callback({
                status: 'success',
                changes: result.affectedRows
            });
        }
    });
}

module.exports = {
    getAllRoles,
    createRole,
    deleteRole,
};