function aggregateElements(arr) {
    console.log(arr.reduce((a, b) => a + b));
    console.log(arr.map(x => 1 / x)     //стренно защо reduce ми дава грешка при 1/а+1/в
        .reduce((a, b) => a + b));
    console.log(arr.reduce((a, b) => '' + a + b));
}
aggregateElements([1, 2, 3])
aggregateElements([2, 4, 8, 16])

