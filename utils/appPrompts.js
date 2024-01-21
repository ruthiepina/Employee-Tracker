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
];

module.exports = { appPrompts };
