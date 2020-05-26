// · Получить кнопку "Начать расчет" через id
let btnStart = document.querySelector('#start');

// · Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)
let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];

// · Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)
let expensesItem = document.getElementsByClassName('expenses-item');

// дата
let yearValue = document.getElementsByClassName('year-value')[0];
let monthValue = document.getElementsByClassName('month-value')[0];
let dayValue = document.getElementsByClassName('day-value')[0];

// · Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.
let expensesItemBtn = document.getElementsByTagName('button')[0];
let optionalexpensesBtn = document.getElementsByTagName('button')[1];
let countBudgetBtn = document.getElementsByTagName('button')[2];

// · Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll
optionalexpensesItems = document.querySelectorAll('.optionalexpenses-item');

// · Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('#sum');
let choosePercent = document.querySelector('#percent'); 
let anotherYearValue = document.querySelector('.year-value'); 
let anotherMonthValue = document.querySelector('.month-value'); 

let testBtn = document.querySelector('#testBtn');

let money, time;

expensesItemBtn.disabled = true;
optionalexpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

btnStart.addEventListener('click', function() {
    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = + prompt('какой ваш бюджет на месяц? :');
    
    expensesItemBtn.disabled = false;
    optionalexpensesBtn.disabled = false;
    countBudgetBtn.disabled = false;

    
    while(isNaN(money) || money == '' || money == null) {
        money = + prompt('какой ваш бюджет на месяц? :');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});





expensesItemBtn.addEventListener('click', function() {
    let sum = 0;
    for (i = 0; i < expensesItem.length; i++) {
        let article = expensesItem[i].value;
        let articleCost = expensesItem[++i].value;
        
        if ( (typeof(article)) != null && (typeof(article)) === 'string' && article != '' && article.length < 50 &&  (typeof(articleCost)) != null && articleCost != '' ) {
            appData.expenses[article] = articleCost;
            sum += + articleCost;
        } else {
            alert('Ошибка ввода, попробуйте еще раз');
        }
    }

    expensesValue.textContent = sum;
    appData.expensesValue = sum;
});

optionalexpensesBtn.addEventListener('click', function () {
    for (i = 0; i < optionalexpensesItems.length; i++) {
        let a = optionalexpensesItems[i].value;
        optionalexpensesValue.textContent += a + ' ';

        if (typeof(a) != null && typeof(a) === 'string' && a != '' && a.length < 50 ) {
            appData.optionalExpenses[i] = a;
        } else {
            alert('Ошибка ввода, попробуйте еще раз');
        }
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - appData.expensesValue) / 30).toFixed();
        daybudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100 ) {
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
            levelValue.textContent = 'Маловато';
        } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
            levelValue.textContent = 'Неплохо';
        } else if (appData.moneyPerDay >= 5000) {
            levelValue.textContent = 'завидую';
        } else {
            levelValue.textContent = 'ошибк';
        };
    } 
    else {
        levelValue.textContent = 'Произошла ошибка'
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});


savings.addEventListener('click', function() {
    if (appData.savings == false) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});

chooseSum.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.yearIncome = sum/100*percent;
        appData.mouthIncome = sum/100/12*percent;
        
        monthsavingsValue.textContent = appData.mouthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    } 
});

percent.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +chooseSum.value,
            percent = +choosePercent.value;

        appData.yearIncome = sum/100*percent;
        appData.mouthIncome = sum/100/12*percent;
        
        monthsavingsValue.textContent = appData.mouthIncome.toFixed(1);
        yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};