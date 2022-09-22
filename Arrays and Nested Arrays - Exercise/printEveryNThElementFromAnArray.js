function printEveryNThElementFromAnArray(arr, step) {
    return arr.filter((a, index) => index % step === 0);
}
console.log(printEveryNThElementFromAnArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2));
console.log(printEveryNThElementFromAnArray(['dsa',
    'asd',
    'test',
    'tset'],
    2));
console.log(printEveryNThElementFromAnArray(['1',
    '2',
    '3',
    '4',
    '5'], 6))