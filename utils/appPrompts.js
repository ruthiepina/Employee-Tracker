//* Create Inquirer Prompts for Initial Menu Options
//* Inquirer prompts for add department, add role, add employee

const appPrompts = [
   {
      type: "list",
      name: "nextOption",
      message: "Please select what you want to do.",
      choices: [
         "view all departments",
         "view all roles",
         "view all employees",
         "add a department",
         "add a role",
         "add an employee",
         "update an employee role",
         "exit application",
      ],
      loop: false,
   },
   {
      when: (answers) => answers.nextOption === "add a department",
      type: "input",
      name: "departmentName",
      message: "Enter the department's name, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add a role",
      type: "input",
      name: "roleTitle",
      message: "Enter the new role title, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add a role",
      type: "number",
      name: "roleDepartmentId",
      message: "Enter the department id for the role, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add a role",
      type: "number",
      name: "roleSalary",
      message: "Enter the role's salary, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add an employee",
      type: "input",
      name: "employeeFirstName",
      message: "Enter the employee's first name, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add an employee",
      type: "input",
      name: "employeeLastName",
      message: "Enter the employee's last name, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add an employee",
      type: "number",
      name: "employeeRoleId",
      message: "Enter the employee's role id, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add an employee",
      type: "salary",
      name: "employeeSalary",
      message: "Enter the employee's salary, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
   {
      when: (answers) => answers.nextOption === "add an employee",
      type: "number",
      name: "employeeManagerId",
      message: "Enter the employee's manager id, cannot be empty: ",
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
];

module.exports = { appPrompts };
