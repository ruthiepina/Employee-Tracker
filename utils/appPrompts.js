const Dept_Index = 0; //* Indexes of array of dept options, roles options, managers options
const Role_Index = 1;
const Manager_Index = 2;

const lists = [[], [], ["none"]]; //* displayed options list array, in array

//* Create Inquirer Prompts for Initial Menu Options
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
      type: "list",
      name: "roleDepartmentName",
      message: "Choose the department that this role belongs to, cannot be empty: ",
      choices: lists[Dept_Index],
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
      type: "list",
      name: "employeeRoleName",
      message: "Choose the employee's role, cannot be empty: ",
      choices: lists[Role_Index],
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
      type: "list",
      name: "employeeManager",
      message: "Choose the employee's manager, cannot be empty: ",
      choices: lists[Manager_Index],
      validate: (notEmpty) => {
         if (notEmpty) {
            return true;
         } else {
            return false;
         }
      },
   },
];

module.exports = { appPrompts, Dept_Index, Role_Index, Manager_Index, lists };
