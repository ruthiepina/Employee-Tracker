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
   let employee_id = 0;
   // let department_id = 0;

   switch (answers.nextOption) {
      case "View all departments":
         sql = `SELECT * FROM departments;`;
         break;
      case "View all roles":
         sql = `SELECT * FROM roles;`;
         break;
      case "View all employees":
         sql = `SELECT * FROM employees;`;
         break;
      case "Add a department":
         displayListsArray = Dept_Index;
         selectedName = answers.departmentName;
         sql = `INSERT INTO departments (name)
VALUES ('${answers.departmentName}');`;
         break;
      case "Add a role":
         displayListsArray = Role_Index;
         selectedName = answers.roleDepartmentName;
         role_id = lists[Role_Index].indexOf(selectedName);
         selectedName = answers.roleTitle;
         sql = `INSERT INTO roles (title, department_id, salary)
VALUES ('${answers.roleTitle}', '${role_id + 1}', '${answers.roleSalary}');`; //* You do + 1 to convert array i to table id
         break;
      case "Add an employee":
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
      case "Update an employee role":
         displayListsArray = Role_Index;
         selectedName = updateEmployeeName;
         employee_id = lists[Manager_Index].indexOf(selectedName);
         selectedName = answers.updateRoleName;
         role_id = lists[displayListsArray].indexOf(selectedName) + 1;
         sql = `UPDATE employees SET role_id = ${role_id} WHERE id = ${employee_id};`;
         break;
      case "Exit application":
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
