function biggerHalf(arr) {
    let length = Math.ceil(arr.length / 2);

    return arr.sort((a, b) => b - a)
        .slice(0, length)
        .reverse();
}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([7, 14, 19, 19, 22]))