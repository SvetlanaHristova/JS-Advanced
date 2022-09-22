function ticTacToe(arr) {
    let table = [[false, false, false],
                [false, false, false],
                [false, false, false]];
    let isFirst = true;
    let counter = 9;
    let marcer;
    for (let command of arr) {
        let [i, j] = command.split(' ');

        if (table[i][j]) {
            console.log("This place is already taken. Please choose another!")
            continue;
        } else {
            marcer = isFirst ? table[i][j] = 'X' : table[i][j] = 'O';
            isFirst = !isFirst;
            counter--
        }

        for (let i = 0; i < 3; i++) {
            if (marcer === table[i][0] && marcer === table[i][1] && marcer === table[i][2]
                || marcer === table[0][i] && marcer === table[1][i] && marcer === table[2][i] ||
                marcer === table[0][0] && marcer === table[1][1] && marcer === table[2][2] ||
                marcer === table[0][2] && marcer === table[1][1] && marcer === table[2][0]) {
                console.log(`Player ${marcer} wins!`);
                return table.forEach(x => console.log(x.join('\t')));
            }
        }

        if (counter === 0) {
            console.log("The game ended! Nobody wins :(");
            return table.forEach(x => console.log(x.join('\t')));
        }
    }
}

console.log(ticTacToe(["0 0",
    "0 0",
    "1 1",
    "2 2",
    "2 1",
    "0 1",
    "0 1",
    "0 2",
    "2 0",
    "1 0",
    "1 2"]));
console.log(ticTacToe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"]
));
console.log(ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
))