function sumOfNumbersN_M(...num) {
    let result = 0;
    let [start, end] = num.map(Number)
    //.sort((a, b) => a - b);

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
}

console.log(sumOfNumbersN_M('10', '1'))
console.log(sumOfNumbersN_M('-8', '20'))

