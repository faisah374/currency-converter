import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    INR: 83.25,
    PKR: 278,
    SUDR: 74,
    UAER: 76
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ['USD', 'EUR', 'PKR', 'INR', 'SUDR', 'UAER']
    },
    {
        name: 'to',
        message: 'Enter to currency',
        type: "list",
        choices: ['USD', 'EUR', 'PKR', 'INR', "SUDR", 'UAER']
    },
    {
        name: 'amount',
        messag: "enter amount",
        type: "number",
    }
]);
let fromamount = currency[user_answer.from];
let toamount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromamount; //usd base currency
let converterAmount = baseAmount * toamount;
console.log(converterAmount);
