'use strict';

var money = prompt("Ваш бюджет на месяц?"); //бюджет
var time = prompt("Введите дату в формате YYYY-MM-DD"); //дата
var a1 = prompt("Введите обязательную статью расходов в этом месяце"),
    b1 = prompt("Во сколько обойдется?"),
    a2 = prompt("Введите обязательную статью расходов в этом месяце"),
    b2 = prompt("Во сколько обойдется?");




var appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: "",
    income: [],
    savings: false
};

appData.expenses[a1] = b1;
appData.expenses[a2] = b2;

var result = appData["budget"] / 30;
document.write("<h2> Ваш доход на один день состовляет = <u>" + result.toFixed(2) + "</u> </h2>");
console.log(appData);

