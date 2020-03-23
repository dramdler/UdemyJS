let money, time;

function start() {
    money = + prompt('какой ваш бюджет на месяц? :');
    time = prompt('Введите дату в формате YYYY-MM-DD');
    
    while(isNaN(money) || money == '' || money == null) {
        money = + prompt('какой ваш бюджет на месяц? :');
    }
}
start();


let appData = {
    Budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
}

appData.Budget = money;
appData.time = time; 

function chooseExpenses() {
    for (i = 0; i < 2; i++) {
        let article = prompt('Введите обязательную статью расходов в этом месяце');
        let articleCost = + prompt('Во сколько обойдется');
        
        if ( (typeof(article)) != null && (typeof(article)) === 'string' && article != '' && article.length < 50 &&  (typeof(articleCost)) != null && articleCost != '' ) {
            appData.expenses[article] = articleCost
        } else {
            alert('Ошибка, попробуйте еще раз');
            --i
        }
    };
}
chooseExpenses();


function chooseOptExpenses() {
    for (i = 0; i < 3; i++) {
        let a = prompt('Статья необязательных расходов?');

        if (typeof(a) != null && typeof(a) === 'string' && a != '' && a.length < 50 ) {
            appData.optionalExpenses[i] = a
        } else {
            i--
            alert('Ошибка, попробуйте еще раз');
        }
    };
}
chooseOptExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.Budget / 30).toFixed();

    alert(appData.moneyPerDay);
}
detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100 ) {
        alert('Это очень мало')
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 1000) {
        alert('Маловато');
    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 5000) {
        alert('Неплохо');
    } else if (appData.moneyPerDay >= 5000) {
        alert('завидую');
    } else {
        alert('ошибк');
        alert(appData.moneyPerDay);
    };
}
detectLevel();


function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt('Какова сумма ваших накоплений?'),
            percent = +prompt('Под какой процент?');
    
        appData.mouthIncome = save/100/12*percent;
        alert('Месячный доход с депозита составляет: ' + appData.mouthIncome);
    }
}
checkSavings()



//console.log(appData)

