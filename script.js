'use strict';

var money = prompt("Ваш бюджет на месяц?"); //бюджет
var time = prompt("Введите дату в формате YYYY-MM-DD"); //дата
var a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");



var appData = {
    budget: money,
    timeData: time,
    expenses: { },
    optionalExpenses: "",
    income: [],
    savings: false
};

appData.expenses[a] = b;

var result = appData["budget"] / 30;
document.write("<h2> Ваш доход на один день состовляет = <u>" + result.toFixed(2) + "</u> </h2>");
console.log(appData);

