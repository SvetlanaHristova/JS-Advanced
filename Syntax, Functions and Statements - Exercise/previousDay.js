function reviousDay(year, month, day) {
    let date = new Date(`${year},${month},${day}`); //тук датата е като стринг, затова няма добавяне на месец
    let newDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1);
                                                    //тук автоматично си взима датата и вадим единия ден
    //console.log(date);
    console.log(`${newDay.getFullYear()}-${newDay.getMonth() + 1}-${newDay.getDate()}`);
                                                    //тъй като искаме стринг добавяме месец към датата
}
reviousDay(2016, 9, 30);
reviousDay(2016, 10, 1);
reviousDay(2020, 2, 28);