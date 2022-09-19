function sameNumbers(number) {
    let arrNumber = ('' + number).split('');
    let filterArr = arrNumber.filter(x => x === arrNumber[0]);

    arrNumber.length === filterArr.length ?
        console.log(true)
        : console.log(false);

    let sum = arrNumber.map(Number)
        .reduce((a, b) => a + b);
    console.log(sum);
}
sameNumbers(2242)
sameNumbers(1234)