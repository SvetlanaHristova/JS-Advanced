function diagonalSums(matrix) {
    let sumLeft = 0;            //За да мина само с един фор цикъл
    let sumRigth = 0;           // правя плитко копие на вътрешните масиви и ги обръщам
    let matrixReverse = matrix.map(x => x.slice().reverse())

    for (let i = 0; i < matrix.length; i++) {
        sumLeft += matrix[i][i];
        sumRigth += matrixReverse[i][i];
    }
    
    console.log(`${sumLeft} ${sumRigth}`)
}
diagonalSums(  [[20, 40],
                [10, 60]]);
diagonalSums(  [[3, 5, 17],
                [-1, 7, 14],
                [1, -8, 89]])