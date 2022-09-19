function daysInAMonth(month, year) {
    /* идеята ми и е да взема първия ден от следващия на дадения месец и да извадя един ден,
    така получавам последния ден за месеца, връщам резултата за деня*/

    let date = 1;
    let day = new Date(`${year}, ${Number(month) + 1} ,  ${Number(date)}`);
    let lastDay = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);

    return lastDay.getDate()

}
console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));