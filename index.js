const inquirer = require('inquirer');
const { initialOptions } = require('./utils/appPrompts');

async function selectOption() {
    return await inquirer.prompt(initialOptions);
}

const initApp = async () => {
    let option = await selectOption();
    console.log('***option', option);
};

initApp();