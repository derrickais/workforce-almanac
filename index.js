const inquirer = require("inquirer");

const db = require("./db/connection.js");
const { getAllDepartments, deleteDepartment, createDepartment } = require("./dbFunctions/department");
const { getAllEmployees, createEmployee, updateEmployee, deleteEmployee } = require("./dbFunctions/employee");
const { getAllRoles, createRole, deleteRole } = require('./dbFunctions/role');

const runApp = function() {
    inquirer.prompt([{
        type: "list",
        name: "action",
        message: "Choose an action:",
        choices: [
            "1. View all departments",
            "2. View all roles",
            "3. View all employees",
            "4. Add a department",
            "5. Add a role",
            "6. Add an employee",
            "7. Change an employee role"
        ]
    }])
    .then((answers) => {
        const action = answers.action.substring(0,1)
        
        if (action == 1) {
            getAllDepartments(function(response) {
                console.log(response)
            })
        }
        if (action == 2) {
            getAllRoles(function(response) {
                console.log(response)
            })
        }
        if (action == 3) {
            getAllEmployees(function(response) {
                console.log(response)
            })
        }
        if (action == 4) {
            createDepartment(function(response) {
                console.log(response)
            })
        }
        if (action == 5) {
            inquirer.prompt([{
                type: "input",
                name: "title",
                message: "What is the title of the role?"
            }, {
                type: "number",
                name: "salary",
                message: "What is the salary?"
            }, {
                type: "number",
                name: "department_id",
                message: "What is the department ID?"
            }])
            .then ((answers) => {
                createRole(answers.title, answers.salary, answers.department_id, function(response) {
                    console.log(response)
                })
            })
        }
        if (action == 6) {
            createEmployee(function(response) {
                console.log(response)
            })
        }
        if (action == 7) {
            updateEmployee(function(response) {
                console.log(response)
            })
        }
    })
    .catch((error) => {
    if (error) {

    }
});
}

db.connect(err => {
    if(err) throw err;
    console.log("Database connected.");
    runApp()
});
