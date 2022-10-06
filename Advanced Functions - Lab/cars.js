function cars(params) {
    let res = {};
    let objFunc = {
        create: (name) => { return res[name] = {} },
        inherit: (name, parentName) => {
            res[name] = Object.create(res[parentName])
        },
        set: (name, key, value) => { res[name][key] = value },
        print: (name) => {
            let arr = [];
            for (let el in res[name]) {
                arr.push(`${el}:${res[name][el]}`)
            }                                       //Object.entries--при наследени елементи май не работи
            /*let arr = Object.entries(res[name]);  
            arr = arr.map(x => x.join(':'))*/
            console.log(arr.join(","))
        }
    }
    for (let element of params) {
        let [one, two, three, forty] = element.split(' ');
        three == 'inherit'
            ? objFunc[three](two, forty)
            : objFunc[one](two, three, forty);
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'])
