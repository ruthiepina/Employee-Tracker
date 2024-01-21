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
         sql = `SELECT * FROM departments`;
         break;
      case "view all roles":
         sql = `SELECT * FROM roles`;
         break;
      case "view all employees":
         sql = `SELECT * FROM employees`;
         break;
      case "add a department":
         console.log(`answers.nextOption`, answers.nextOption);
         break;
      case "add a role":
         console.log(`answers.nextOption`, answers.nextOption);
         break;
      case "add an employee":
         console.log(`answers.nextOption`, answers.nextOption);
         break;
      case "update an employee role":
         console.log(`answers.nextOption`, answers.nextOption);
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
