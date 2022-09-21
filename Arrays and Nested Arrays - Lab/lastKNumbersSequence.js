function lastKNumbersSequence(n, k) {
    let res = [1];

    for (let i = 1; i < n; i++) {
        let first = 0;
        let end = i;
        if (i - k >= 0) {
            first = i - k;
        }

        res.push(res.slice(first, end + 1)
            .reduce((a, b) => a + b));
    }
    return res;
}
console.log(lastKNumbersSequence(6, 3));
console.log(lastKNumbersSequence(8, 2))