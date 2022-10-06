function argumentInfo(...params) {
    let obj = {};
    for (let el of params) {
        let type=typeof(el);
        console.log(`${type}: ${el}`);
        obj.hasOwnProperty(type)
            ? obj[type] += 1
            : obj[type] = 1;
    }
    console.log(Object.entries(obj)
        .map(([x, y]) => `${x} = ${y}`)
        .join('\n'))

}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
