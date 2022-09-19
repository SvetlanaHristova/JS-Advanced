function greatestCommonDivisorGCD(a, b) {
    /* по-голямото число се дели на по-малкото до остатък нула,
    НОД е останалото по-голямо число*/
    while (true) {
        if (b == 0) {
            return a;
        } else {
            a %= b
        };
        if (a == 0) {
            return b;
        } else {
            b %= a;
        }
    }
}
console.log(greatestCommonDivisorGCD(14, 49))
console.log(greatestCommonDivisorGCD(2154, 458))