function negativePositiveNumbers(arr) {
    let res = [];
    arr.forEach(el =>
        el < 0 ? res.unshift(el)
            : res.push(el));

    console.log(res);
}
negativePositiveNumbers([7, -2, 8, 9]);
negativePositiveNumbers([3, -2, 0, -1])