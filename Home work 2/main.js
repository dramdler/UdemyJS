let money = + prompt('какой ваш бюджет на месяц? :');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    Budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

appData.Budget = money;
appData.time = time; 


//DO WHILE
// let i = 0
// do {
//     let article = prompt('Введите обязательную статью расходов в этом месяце');
//     let articleCost = + prompt('Во сколько обойдется');
//     if ( article != null && article != '' && articleCost != null && articleCost != '' ) {
//         appData.expenses[article] = articleCost;
//         ++i;
//     } else {
//         alert('Ошибка, попробуйте еще раз');
//     }
// }while ( i < 2 );


//WHILE
// let i = 0;
// while ( i < 2){
//     let article = prompt('Введите обязательную статью расходов в этом месяце');
//     let articleCost = + prompt('Во сколько обойдется');
//     if ( article != null && article != '' && articleCost != null && articleCost != '' ) {
//         appData.expenses[article] = articleCost
//     } else {
//         alert('Ошибка, попробуйте еще раз');
//         --i
//     }
//     ++i
// }; 



for (i = 0; i < 2; i++) {
    let article = prompt('Введите обязательную статью расходов в этом месяце');
    let articleCost = + prompt('Во сколько обойдется');
    
    if ( article != null && article != '' && articleCost != null && articleCost != '' ) {
        appData.expenses[article] = articleCost
    } else {
        alert('Ошибка, попробуйте еще раз');
        --i
    }
};


appData.moneyPerDay = appData.Budget / 30;

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

console.log(appData)