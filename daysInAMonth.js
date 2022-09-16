function daysInAMonth(month, year) {
    let date = 1;
    let day = new Date(`${year}, ${Number(month) + 1} ,  ${Number(date)}`);
    let lastDay = new Date(day.getFullYear(), day.getMonth(), day.getDate() - 1);

    return lastDay.getDate()

}
console.log(daysInAMonth(1, 2012));
console.log(daysInAMonth(2, 2021));