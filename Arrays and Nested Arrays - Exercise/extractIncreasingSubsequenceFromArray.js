function extractIncreasingSubsequenceFromArray(arr) {
    /* За да сравнявам последния елемент от навия масив
    с текущия създавам променлива отпървия елемент на входия масив,
    в редус срявнявам двата елемента и ако тоговаря пушвам в новия масив
    не забравяй да отбилижиш че резултатите се събират в нов масив в края на редус */
    let big = arr[0];
    return arr.reduce((res, b) => {
        if (big <= b) {
            res.push(b);
            big = b;
        }
        return res;
    }, []);

}
console.log(extractIncreasingSubsequenceFromArray([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]));
console.log(extractIncreasingSubsequenceFromArray([1,
    2,
    3,
    4]));
console.log(extractIncreasingSubsequenceFromArray([20,
    3,
    2,
    15,
    6,
    1]));