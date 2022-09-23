function townPopulation(data) {
    let obj = {};

    for (let element of data) {
        let [key, value] = element.split(' <-> ');
        obj.hasOwnProperty(key) ?
            obj[key] += Number(value) :
            obj[key] = Number(value);
    }

    Object.entries(obj)
        .forEach(element => {
            console.log(element.join(' : '));
        });
}

townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);