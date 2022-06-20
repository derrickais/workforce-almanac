const inquirer = require("inquirer");
const cTable = require("console.table");

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
                if (response.data){
                    console.table(response.data);
                }
                doAnotherTask();
            })
        }
        if (action == 2) {
            getAllRoles(function(response) {
                if (response.data){
                    console.table(response.data);
                }
                doAnotherTask();
            })
        }
        if (action == 3) {
            getAllEmployees(function(response) {
                if (response.data){
                    console.table(response.data);
                }
                doAnotherTask();
            })
        }
        if (action == 4) {
            inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the name of the department?"
            }])
            .then ((answers) => {
                createDepartment(answers.name, function(response) {
                    if (response.status == "success") {
                        console.log("Department added!");
                    } else {
                        console.log("Error")
                        console.log(response.error);
                    }
                    doAnotherTask();
                })
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
                    if (response.status == "success") {
                        console.log("Role added!");
                    } else {
                        console.log("Error")
                        console.log(response.error);
                    }
                    doAnotherTask();
                })
            })
        }
        if (action == 6) {
            inquirer.prompt([{
                type: "input",
                name: "first_name",
                message: "What is their first name?"
            }, {
                type: "input",
                name: "last_name",
                message: "What is their last name?"
            }, {
                type: "number",
                name: "role_id",
                message: "What is their role ID?"
            }, {
                type: "number",
                name: "manager_id",
                message: "What is their manager ID"
            }])
            .then ((answers) => {
                createEmployee(answers.first_name, answers.last_name, answers.role_id, answers.manager_id,
                    function(response) {
                        if (response.status == "success") {
                            console.log("Employee added!");
                        } else {
                            console.log("Error")
                            console.log(response.error);
                        }
                        doAnotherTask();
                    }
                )
            })
        }
        if (action == 7) {
            inquirer.prompt([{
                type: "input",
                name: "id",
                message: "What is the employee's ID?"
            } , {
                type: "input",
                name: "role_id",
                message: "What is the ID of their new role?"
            }])
            .then ((answers) => {
                updateEmployee(answers.role_id, answers.id, function(response) {
                    if (response.status == "success") {
                        console.log("Employee Updated!");
                    } else {
                        console.log("Error")
                        console.log(response.error);
                    }
                    doAnotherTask();
                })
            })
        }
    })
    .catch((error) => {
    if (error) {

    }
});
}

function doAnotherTask() {
    inquirer.prompt([{
        type: "confirm",
        name: "newTask",
        message: "Would you like to perform another task?"
    }])
    .then((answer) => {
        if (answer.newTask){
            runApp();
        } else {
            console.log("Goodbye :)");
        }
    })
}

db.connect(err => {
    if(err) throw err;
    console.log("Database connected.");
    runApp()
});
