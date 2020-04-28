
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
let percent = document.querySelector('#percent'); 
let anotherYearValue = document.querySelector('.year-value'); 
let anotherMonthValue = document.querySelector('.month-value'); 

console.log(chooseSum);


// 2) Задание по проекту

// ·        Получить кнопку "Начать расчет" через id

// ·        Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

// ·        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

// ·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

// ·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

// ·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

// 3) Проверить, чтобы все работало и не было ошибок в консоли

// 4) Добавить папку с уроком на свой GitHub