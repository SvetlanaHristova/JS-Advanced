function equalNeighbors(matrix) {
    let counter = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === matrix.length - 1 && j === matrix[i].length - 1) {
                return (counter);                                           //достигнали сме до края на матрицата
            } else if (j === matrix[i].length - 1) {                        //последен елемент от колоната
                if (matrix[i][j] === matrix[i + 1][j]) {                    //проверяваме само на долу
                    counter++;
                }
            } else if (i === matrix.length - 1) {                           //последен елемент от реда
                if (matrix[i][j] === matrix[i][j + 1]) {                    //проверяваме само на страни
                    counter++;
                }
            } else {                                                        //всичко останало,но по отделно 
                if (matrix[i][j] === matrix[i][j + 1]) {                    // заради дублиране на съвпадния
                    counter++;
                }
                if (matrix[i][j] === matrix[i + 1][j]) {
                    counter++;
                }
            }
        }
    }
}

console.log(equalNeighbors([['2', '3', '4', '7', '0'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '3', '5', '4', '2'],
                            ['9', '8', '7', '5', '4']]));
console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
                            ['well', 'done', 'yo', '6'],
                            ['not', 'done', 'yet', '5']]));
console.log(equalNeighbors([['2', '2', '5', '7', '4'],
                            ['4', '0', '5', '3', '4'],
                            ['2', '5', '5', '4', '4']]))