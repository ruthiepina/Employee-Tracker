//* Create Inquirer Prompts for Initial Menu Options
const initialOptions = [
   {
      type: "list",
      name: "option",
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
      loop: true,
   },
];

module.exports = { initialOptions };
