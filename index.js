const inquirer = require("inquirer");
const { appPrompts, Dept_Index, Role_Index, Manager_Index, lists } = require("./utils/appPrompts.js");
const Department = require("./lib/Department.js");
const Employee = require("./lib/Employee.js");
const Role = require("./lib/Role.js");
const db = require("./db/connection.js");
const cTable = require("console.table");


const selectOption = async () => {
   const answers = await inquirer.prompt(appPrompts);

   let sql = ``;
   let displayListsArray = 0;
   let selectedName = ``;
   let role_id = 0;
   let manager_id = 0;

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
         displayListsArray = Dept_Index;
         selectedName = answers.departmentName;
         sql = `INSERT INTO departments (name)
VALUES ('${answers.departmentName}');`;
         break;
      case "add a role":
         displayListsArray = Role_Index;
         selectedName = answers.roleDepartmentName;
         role_id = lists[Role_Index].indexOf(selectedName);
         selectedName = answers.roleTitle;
         sql = `INSERT INTO roles (title, department_id, salary)
VALUES ('${answers.roleTitle}', '${role_id + 1}', '${answers.roleSalary}');`; //* You do + 1 to convert array i to table id
         break;
      case "add an employee":
         const NULL_Condition = 1;
         displayListsArray = Manager_Index;
         selectedName = answers.employeeRoleName;
         role_id = lists[Role_Index].indexOf(selectedName) + 1;
         selectedName = answers.employeeManagerName;
         manager_id = lists[displayListsArray].indexOf(selectedName) + 1;
         selectedName = answers.employeeFirstName + " " + answers.employeeLastName;
         if (manager_id === NULL_Condition) {
            sql = `INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
            VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${role_id}', '${answers.employeeSalary}', NULL);`;
         } else {
            sql = `INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
            VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${role_id}', '${answers.employeeSalary}', '${manager_id}');`;
         }
         break;
      case "update an employee role":
         break;
      case "exit application":
         db.end();
         return;
         break;
   }
   db.query(sql, (err, rows) => {
      if (selectedName) {
         lists[displayListsArray].push(selectedName);
      }
      console.log(`\n ${answers.nextOption}\n`);
      console.table(rows);

      selectOption();
   });
};

const initApp = async () => {
   let nextOption = await selectOption();
   db.connect((err) => {
      if (err) throw err;
      selectOption();
   });
};

initApp();
