const inquirer = require("inquirer");
const { appPrompts } = require("./utils/appPrompts.js");
const Department = require("./lib/Department.js");
const Employee = require("./lib/Employee.js");
const Role = require("./lib/Role.js");
const db = require("./db/connection.js");
const cTable = require("console.table");

// async function selectOption() {
//    return await inquirer.prompt(initialOptions);
// }

const selectOption = async () => {
   const answers = await inquirer.prompt(appPrompts);
   let sql = ``;
   switch (answers.nextOption) {
      case "view all departments":
         sql = `SELECT * FROM departments;`;
         break;
      case "view all roles":
         sql = `SELECT * FROM roles;`;
         break;
      case "view all employees":
         sql = `SELECT * FROM employees;`;
         break;
      case "add a department":
         sql = `INSERT INTO departments (name)
VALUES ('${answers.departmentName}');`;
         break;
      case "add a role":
         sql = `INSERT INTO roles (title, department_id, salary)
VALUES ('${answers.roleTitle}', '${answers.roleDepartmentId}', '${answers.roleSalary}');`;
         break;
      case "add an employee":
         sql = `INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${answers.employeeRoleId}', '${answers.employeeSalary}', '${answers.employeeManagerId}')`;
         break;
      case "update an employee role":
         break;
      case "exit application":
         db.end();
         return;
         break;
   }
   db.query(sql, (err, rows) => {
      if (err) throw err;
      console.log(`\n ${answers.nextOption}\n`);
      console.table(rows);
      selectOption();
   });
   //return answers.nextOption !== "exit application" ? selectOption() : answers.nextOption;
};

const initApp = async () => {
   let nextOption = await selectOption();
   db.connect((err) => {
      if (err) throw err;
      selectOption();
   });
};

initApp();
