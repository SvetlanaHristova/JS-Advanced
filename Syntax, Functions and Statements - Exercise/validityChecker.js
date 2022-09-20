function validityChecker(x1, y1, x2, y2) {
    let firstPoint = calculate(x1, y1, 0, 0);
    let secondPoint = calculate(x2, y2, 0, 0);
    let distans = calculate(x1, y1, x2, y2);
    let firstValidation = validation(firstPoint);
    let secondValidation = validation(secondPoint);
    let distansValidation = validation(distans);
    print(x1, y1, 0, 0, firstValidation);
    print(x2, y2, 0, 0, secondValidation);
    print(x1, y1, x2, y2, distansValidation);

    function calculate(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
    function validation(point) {
        return point === Math.floor(point) ? 'valid' : 'invalid';
    }
    function print(x1, y1, x2, y2, valid) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${valid}`);
    }
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1)