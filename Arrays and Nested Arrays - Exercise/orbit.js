function orbit(arr) {
    let [n, m, x, y] = arr;

    for (let i = 0; i < n; i++) {

        let orbitalMatrix = [];

        for (let j = 0; j < m; j++) {

            let offset = 1 + Math.max(Math.abs(i - x), Math.abs(j - y));
            
            orbitalMatrix.push(offset);

        }

        console.log(orbitalMatrix.join(' '));
    }

}

orbit([4, 4, 0, 0])
orbit([5, 5, 2, 2])
orbit([3, 3, 2, 2])