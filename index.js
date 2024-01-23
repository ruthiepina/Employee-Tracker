const inquirer = require("inquirer");
const { appPrompts, Dept_Index, Role_Index, Manager_Index, lists } = require("./utils/appPrompts");
const db = require("./db/connection");
const cTable = require("console.table");

const selectOption = async () => {
   const answers = await inquirer.prompt(appPrompts);

   let sql = ``;
   let displayListsArray = 0;
   let role_id = 0;
   let manager_id = 0;
   let employee_id = 0;
   let department_id = 0;

   switch (answers.nextOption) {
      case "View all departments":
         sql = `SELECT id, name AS department FROM departments;`;
         executeQuery(sql, "", displayListsArray, answers.nextOption);
         break;
      case "View all roles":
         sql = `SELECT roles.id, roles.title, departments.name AS department, roles.salary from roles INNER JOIN departments ON departments.id = roles.department_id;`;
         executeQuery(sql, "", displayListsArray, answers.nextOption);
         break;
      case "View all employees":
         sql = `SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS department, employees.salary, CONCAT(managers.first_name, ' ', managers.last_name) AS manager
                  FROM employees LEFT JOIN employees AS managers on managers.id = employees.manager_id
                  INNER JOIN roles ON roles.id = employees.role_id
                  INNER JOIN departments ON departments.id = roles.department_id
                  ORDER BY employees.id ASC;`;
         executeQuery(sql, "", displayListsArray, answers.nextOption);
         break;
      case "Add a department":
         sql = `INSERT INTO departments (name)
VALUES ('${answers.departmentName}');`;
         executeQuery(sql, answers.departmentName, Dept_Index, answers.nextOption);
         break;
      case "Add a role":
         department_id = lists[Dept_Index].indexOf(answers.roleDepartmentName) + 1;
         sql = `INSERT INTO roles (title, department_id, salary)
VALUES ('${answers.roleTitle}', '${department_id}', '${answers.roleSalary}');`;
         executeQuery(sql, answers.roleTitle, Role_Index, answers.nextOption);
         break;
      case "Add an employee":
         role_id = lists[Role_Index].indexOf(answers.employeeRoleName) + 1;
         manager_id = lists[Manager_Index].indexOf(answers.employeeManager);
         if (!manager_id) {
            sql = `INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
            VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${role_id}', '${answers.employeeSalary}', NULL);`;
         } else {
            sql = `INSERT INTO employees (first_name, last_name, role_id, salary, manager_id)
            VALUES ('${answers.employeeFirstName}', '${answers.employeeLastName}', '${role_id}', '${answers.employeeSalary}', '${manager_id}');`;
         }
         executeQuery(sql, answers.employeeFirstName + " " + answers.employeeLastName, Manager_Index, answers.nextOption);
         break;
      case "Update an employee role":
         employee_id = lists[Manager_Index].indexOf(answers.updateEmployeeName);
         role_id = lists[Role_Index].indexOf(answers.updateRoleName) + 1;
         sql = `UPDATE employees SET role_id = ${role_id} WHERE id = ${employee_id};`;
         executeQuery(sql, "", 0, answers.nextOption);
         break;
      case "Exit application":
         db.end();
         return;
         break;
   }
};

const dbDataToArray = async () => {
   sql = `SELECT name FROM departments;`;
   db.query(sql, (err, rows) => {
      if (err) throw err;
      rows.forEach((row) => {
         lists[Dept_Index].push(row.name);
      });
   });
   sql = `SELECT title FROM roles;`;
   db.query(sql, (err, rows) => {
      if (err) throw err;
      rows.forEach((row) => {
         lists[Role_Index].push(row.title);
      });
   });
   sql = `SELECT CONCAT(first_name, ' ', last_name) AS employeeName FROM employees;`;
   db.query(sql, (err, rows) => {
      if (err) throw err;
      rows.forEach((row) => {
         lists[Manager_Index].push(row.employeeName);
      });
   });
};

function executeQuery(sql, selectedName, displayListsArray, heading) {
   db.query(sql, (err, rows) => {
      if (err) throw err;
      if (selectedName) {
         lists[displayListsArray].push(selectedName);
         console.log(`'${heading}' request processed`);
      } else {
         console.log(`\n ${heading}\n`);
         console.table(rows);
      }
      selectOption();
   });
}

const initApp = async () => {
   console.log(`
*******************************************************************************
*             W E L C O M E   T O   E m p l o y e e - T r a c k e r           *
*******************************************************************************`);
   db.connect((err) => {
      if (err) throw err;
      dbDataToArray();
      selectOption();
   });
};

initApp();
