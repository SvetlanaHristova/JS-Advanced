function evenPositionElements(arr) {
    let res = arr.filter((x, index) =>  //по този начин достъпвам индекса на масива
        index % 2 === 0)                // и манипулирам чрез него
        .join(' ');
    console.log(res);
}
evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10'])
