const db = require("../db/connection");

function getAllEmployees(callback) {
    const sql = `SELECT employees.id, employees.first_name, employees.last_name, CONCAT(e.first_name, " ", e.last_name) as "manager", roles.title, departments.name AS "Department Name"  FROM employees
                    LEFT JOIN roles ON employees.role_id = roles.id
                    LEFT JOIN departments ON roles.department_id = departments.id
                    LEFT JOIN employees e ON employees.manager_id = e.id;
    `;

    db.query(sql, (err,rows) => {
        if (err) {
            callback({
                status: "error",
                message: err.message
            })
            return
        }
        callback({
            status: "success",
            data: rows
        });
    });
}

function createEmployee(first_name, last_name, role_id, manager_id, callback) {

    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [first_name, last_name, role_id, manager_id];

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

function updateEmployee(role_id, id, callback) {
    const sql = `UPDATE employees SET role_id = ? WHERE id = ?`;
    const params = [role_id, id];

    db.query(sql, params, (err, result) => {
        if (err) {
            callback({
                status: "error",
                message: err.message
            })
        } else if (!result.affectedRows) {
            callback({
                status: "error",
                message: 'Employee not found'
            })
        } else {
            callback({
                status: 'success',
                data: result
            });
        }
    });
}



function deleteEmployee(id, callback) {

    const sql = `DELETE FROM employees WHERE id = ?`;
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
                message: 'Employee not found'
            })
        } else {
            callback({
                status: 'success',
            });
        }
    });
}


module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
};