function sortingNumbers(arr) {
    arr.sort((a, b) => a - b);
    let bigest = arr.splice(Math.ceil(arr.length / 2))
        .reverse();

    return arr.reduce((acc, x, index) => {
        acc.push(x);
        if (index !== bigest.length) {
            acc.push(bigest[index]);
        }
        return acc;
    }, []);

}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56, 2]))