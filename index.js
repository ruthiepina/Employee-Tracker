const inquirer = require("inquirer");
const { appPrompts } = require("./utils/appPrompts");

// async function selectOption() {
//    return await inquirer.prompt(initialOptions);
// }

const selectOption = async () => {
   const answers = await inquirer.prompt(appPrompts);
   switch (answers.nextOption) {
      case "view all departments":
         console.log(`answers.nextOption`, answers.nextOption);
         break;
      case "view all roles":
         console.log(`answers.nextOption`, answers.nextOption);
         break;
      case "view all employees":
         console.log(`answers.nextOption`, answers.nextOption);
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
         console.log(`answers.nextOption`, answers.nextOption);
         break;
   }
   return answers.nextOption !== "exit application" ? selectOption() : answers.nextOption;
};

const initApp = async () => {
    let nextOption = await selectOption();
    
   return;
};

initApp();
