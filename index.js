const inquirer = require("inquirer");
const 

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

        }
    })
    .catch((error) => {
    if (error) {

    }
});
}

module.exports = runApp;