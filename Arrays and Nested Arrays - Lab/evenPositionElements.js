function evenPositionElements(arr) {
    let res = arr.filter((x, index) =>
        index % 2 === 0).join(' ');
    console.log(res)
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10'])
