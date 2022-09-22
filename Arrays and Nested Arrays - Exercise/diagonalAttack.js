function diagonalAttack(input) {
    let inputL = input.length;
    let matrix = input.map(x => x.split(' '));
    let leftDiagonal = 0;
    let rigthDiagonal = 0;

    for (let i = 0; i < inputL; i++) {
        leftDiagonal += Number(matrix[i][i]);
    }

    for (let i = inputL - 1; i >= 0; i--) {
        rigthDiagonal += Number(matrix[i][inputL - 1 - i]);
    }

    let sumMatrix = newMatrix(inputL, leftDiagonal);

    if (leftDiagonal !== rigthDiagonal) {
        return matrix.forEach(x => console.log(x.join(' ')));
    } else {

        for (let i = 0; i < inputL; i++) {
            sumMatrix[i][i] = matrix[i][i];
        }

        for (let i = inputL - 1; i >= 0; i--) {
            sumMatrix[i][inputL - 1 - i] = matrix[i][inputL - 1 - i];
        }

        return sumMatrix.forEach(x => console.log(x.join(' ')));
    }

    function newMatrix(side, num) {
        let newMatrix = [];
        let element = (num + ' ')
            .repeat(side)
            .trim();

        for (let i = 0; i < side; i++) {
            newMatrix.push(element.split(' '));
        }

        return newMatrix;
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);