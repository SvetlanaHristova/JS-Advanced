function jansNotation(data) {

    let operator = {
        "+": (a, b) => { return a + b },
        "-": (a, b) => { return a - b },
        "*": (a, b) => { return a * b },
        "/": (a, b) => { return a / b }
    };

    let numbers = [];
    let commands = [];

    data.forEach(element => {
        Number(element) === element
            ? numbers.push(element)
            : commands.push(element)

    });

    if (numbers.length === commands.length + 1) {
        let res = [];

        for (let el of data) {
            if (typeof (el) === 'number') {
                res.push(el);
                continue;
            };
            num2 = res.pop();
            num1 = res.pop();
            res.push(operator[el](num1, num2));
        }

        console.log(res.join(''));

    } else {

        return numbers.length < commands.length + 1
            ? console.log('Error: not enough operands!')
            : console.log('Error: too many operands!');
    }
}
/*jansNotation([3, 4, '+']);
jansNotation([5, 3, 4, '*', '-']);
jansNotation([7, 33, 8, '-']);
jansNotation([15, '/']);*/
jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, "/"]);