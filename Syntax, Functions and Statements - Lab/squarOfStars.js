function squarOfStars(n) {

    n === undefined ? n = 5 : n;
    return ('* '.repeat(n) + '\n')
        .repeat(n);

}

console.log(squarOfStars());
console.log(squarOfStars(2));
console.log(squarOfStars(5));
console.log(squarOfStars(7));