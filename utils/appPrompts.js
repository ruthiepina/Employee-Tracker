//* Create Inquirer Prompts for Initial Menu Options

// TODO where do the prompts for the bonuses get added to? is it a "choice" within a "choice"??

// TODO create another const for departmentPrompts, employeePrompts, etc.

const appPrompts = [ //*Call it initialPrompts
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
