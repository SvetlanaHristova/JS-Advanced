function stringLength(...str) {

    let totalLength = str.map(x => x.length)
        .reduce((a, b) => a + b);
    let averLength = Math.floor(totalLength / str.length);

    console.log(totalLength);
    console.log(averLength);
}
stringLength('chocolate', 'ice cream', 'cake')
stringLength('pasta', '5', '22.3')