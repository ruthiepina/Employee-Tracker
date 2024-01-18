const inquirer = require("inquirer");
const { initialOptions } = require("./utils/appPrompts");

// async function selectOption() {
//    return await inquirer.prompt(initialOptions);
// }

const selectOption = async () => {
   const answers = await inquirer.prompt(initialOptions);
   console.log(answers);
   return answers.option !== "exit application" ? selectOption() : 0;
};

const initApp = async () => {
   let option = await selectOption();
   console.log("***option", option);
   return;
};

initApp();
