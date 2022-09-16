function circleArea(input) {
    let typeInput = typeof (input);
    let area = Math.pow(input, 2) * Math.PI;
    (typeInput === "number") ? console.log(area.toFixed(2))
        : console.log(`We can not calculate the circle area, because we receive a ${typeInput}.`);
}
circleArea(5)
circleArea('name')