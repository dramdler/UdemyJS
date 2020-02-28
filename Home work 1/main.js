let money = prompt('какой ваш бюджет на месяц? :');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    money: '',
    time: '',
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

appData.money = money;
appData.time = time; 

let firstArticle = prompt('Введите обязательную статью расходов в этом месяце');
let firstArticleCost = prompt('Во сколько обойдется');

appData.expenses[firstArticle] = firstArticleCost;

let SecondArticle = prompt('Введите обязательную статью расходов в этом месяце');
let SecondArticleCost = prompt('Во сколько обойдется');

appData.expenses[SecondArticle] = SecondArticleCost;

let dailyBudget = ( +(appData.money) - +(appData.expenses[firstArticle]) + +(appData.expenses[SecondArticle]) ) / 30;

alert('Дневной бюджет равен: ' + dailyBudget);
 
