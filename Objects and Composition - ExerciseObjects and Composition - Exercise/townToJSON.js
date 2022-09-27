function townToJSON(arr) {
    let res = [];
    arr.shift();
    arr.map(x => {
        x.replace
        let [a,town, latitude, longitude] = x.split(/[ ]*[|][ ]*/g);

        res.push({
            "Town": town,
            'Latitude': Number(Number(latitude).toFixed(2)),
            'Longitude': Number(Number(longitude).toFixed(2))
        });
    });
    return JSON.stringify(res);
}
console.log(townToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']));
console.log(townToJSON(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']))