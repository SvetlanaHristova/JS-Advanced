function getFibonator() {
    let firstNum = 0;
    let secondNum = 1;

    function result() {
        let res = firstNum + secondNum;
        secondNum = firstNum;
        firstNum = res;
        return res;
    }
    return result;
}
let fib = getFibonator();
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())
console.log(fib())


