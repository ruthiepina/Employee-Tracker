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
         "View all departments",
         "View all roles",
         "View all employees",
         "Add a department",
         "Add a role",
         "Add an employee",
         "Update an employee role",
         "Exit application",
      ],
      loop: false,
   },
   {
      when: (answers) => answers.nextOption === "Add a department",
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
      when: (answers) => answers.nextOption === "Add a role",
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
      when: (answers) => answers.nextOption === "Add a role",
      type: "list",
      name: "roleDepartmentName",
      message: "Select the department that this role reports to, cannot be empty: ",
      choices: lists[Dept_Index],
   },
   {
      when: (answers) => answers.nextOption === "Add a role",
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
      when: (answers) => answers.nextOption === "Add an employee",
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
      when: (answers) => answers.nextOption === "Add an employee",
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
      when: (answers) => answers.nextOption === "Add an employee",
      type: "list",
      name: "employeeRoleName",
      message: "Select the employee's role, cannot be empty: ",
      choices: lists[Role_Index],
   },
   {
      when: (answers) => answers.nextOption === "Add an employee",
      type: "input",
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
      when: (answers) => answers.nextOption === "Add an employee",
      type: "list",
      name: "employeeManager",
      message: "Select the employee's manager, cannot be empty: ",
      choices: lists[Manager_Index],
   },
   {
      when: (answers) => answers.nextOption === "Update an employee role",
      type: "list",
      name: "updateEmployeeName",
      message: "Select the employee you wish to update: ",
      choices: lists[Manager_Index],
   },
   {
      when: (answers) => answers.nextOption === "Update an employee role",
      type: "list",
      name: "updateRoleName",
      message: "Select the employee's updated role: ",
      choices: lists[Role_Index],
   },
];

module.exports = { appPrompts, Dept_Index, Role_Index, Manager_Index, lists };
