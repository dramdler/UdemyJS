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
    chooseExpenses: function () {
        for (i = 0; i < 2; i++) {
            let article = prompt('Введите обязательную статью расходов в этом месяце');
            let articleCost = + prompt('Во сколько обойдется');
            
            if ( (typeof(article)) != null && (typeof(article)) === 'string' && article != '' && article.length < 50 &&  (typeof(articleCost)) != null && articleCost != '' ) {
                appData.expenses[article] = articleCost
            } else {
                alert('Ошибка, попробуйте еще раз');
                --i;
            }
        }
    },
    chooseOptExpenses: function () {
        for (i = 0; i < 3; i++) {
            let a = prompt('Статья необязательных расходов?');
    
            if (typeof(a) != null && typeof(a) === 'string' && a != '' && a.length < 50 ) {
                appData.optionalExpenses[i] = a
            } else {
                i--
                alert('Ошибка, попробуйте еще раз');
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.Budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel() {
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
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма ваших накоплений?'),
                percent = +prompt('Под какой процент?');
        
            appData.mouthIncome = save/100/12*percent;
            alert('Месячный доход с депозита составляет: ' + appData.mouthIncome);
        }
    },
    chooseIncome: function () {
        for ( i = 0; i < 1 ; i++ ){
            let items = prompt('Что принесет дополнительный доход? (Перечислете через)', '');
            if (items != '' & items != null ) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Что-то еще?'));
                appData.income.sort();
            } else {
                i--
            };
        }
    },
}
appData.chooseIncome();

let incomeList = '';

appData.income.forEach(function(item, i, arr) {
    incomeList += (++i + ": " + item + '\n');
});

alert(incomeList);

for (let data in appData) {
    console.log('Наша программа включает в себя данные: ' + data ); 
}