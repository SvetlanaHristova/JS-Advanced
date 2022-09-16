function mathOperations(num1, num2, operator) {
    let result = {
        //'+', '-', '*', '/', '%', '**'
        '+': num1 + num2,
        '-': num1 - num2,
        '*': num1 * num2,
        '/': num1 / num2,
        '%': num1 %  num2,
        '**': num1 ** num2
    }
    console.log(result[operator])
}
mathOperations(5, 6, '+')
mathOperations(3, 5.5, '*')