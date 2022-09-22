function magicMatrices(matrix) {
    let matrixL = matrix.length;
    let sum = matrix[0].reduce((a, b) => a + b);

    for (let i = 0; i < matrixL; i++) {
        let curenColumn = matrix[0][i];

        for (let j = 1; j < matrixL; j++) {
            curenColumn += matrix[j][i];
            let curenRow = matrix[j].reduce((a, b) => a + b);

            if (sum !== curenRow) {
                return false;
            }
        }

        if (sum !== curenColumn) {
            return false;
        }
    }

    return true;
}
console.log(magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]));
console.log(magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]));
console.log(magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]));