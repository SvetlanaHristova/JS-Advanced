function spiralMatrix(n, m) {

    let printSpiral = matrixFilling();
    
    printSpiral.forEach(element => {
        console.log(element.join(' '))
    });

    function matrix(row, column) {
        let arrMatrix = [];
        for (let i = 0; i < row; i++) {
            let arr = [];
            for (let j = 0; j < column; j++) {

                let curentSimbol = '';
                arr.push(curentSimbol);
            }

            arrMatrix.push(arr);
        }
        return arrMatrix;
    }
    function matrixFilling() {
        let arr = matrix(n, m);
        let a = 1;
        let num = 1;
        while (num <= n * m) {
            let x = a - 1;
            let y = m - a;
            let z = n - a;
            if (num === n * m) {
                arr[x][y] = num;
                return arr;
            }
            for (let i = x; i < y; i++) {
                arr[x][i] = num;
                num++;
                if (num > n * m) {
                    return arr;
                }
            }

            for (let i = x; i < z; i++) {
                arr[i][y] = num;
                num++;
                if (num > n * m) {
                    return arr;
                }
            }

            for (let i = y; i > x; i--) {
                arr[z][i] = num;
                num++;
                if (num > n * m) {
                    return arr;
                }
            }

            for (let i = z; i > x; i--) {
                arr[i][x] = num;
                num++;
                if (num > n * m) {
                    return arr;
                }
            }
            a++;

        }
    }
}





spiralMatrix(4, 3)