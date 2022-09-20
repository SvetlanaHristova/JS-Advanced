function validityChecker(x1, y1, x2, y2) {
    let distansValidation;
    let firstPoint = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    firstPoint === Math.floor(firstPoint) ? distansValidation = 'valid' : distansValidation = 'invalid';
    console.log(`{${x1}, ${y1}} to {0, 0} is ${distansValidation}`);
    let secondPoint = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    secondPoint === Math.floor(secondPoint) ? distansValidation = 'valid' : distansValidation = 'invalid';
    console.log(`{${x2}, ${y2}} to {0, 0} is ${distansValidation}`);
    let distans = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    distans === Math.floor(distans) ? distansValidation = 'valid' : distansValidation = 'invalid';
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${distansValidation}`);
}
validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1)