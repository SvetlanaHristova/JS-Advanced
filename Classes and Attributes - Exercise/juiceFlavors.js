function juiceFlavors(arr) {
    let bottles = {};
    let juices = {};
    for (let element of arr) {
        let [juice, quantity] = element.split(' => ');
        juices.hasOwnProperty(juice)?
            juices[juice] += Number(quantity)
            : juices[juice] = Number(quantity);
            
        while (juices[juice] >= 1000) {
            bottles.hasOwnProperty(juice) ?
                bottles[juice]+=1
                : bottles[juice] = 1;
            juices[juice] -= 1000;
        }
    }
    let list=Object.entries(bottles)
    list.forEach(x => {
        console.log(`${x[0]} => ${x[1]}`);
    });
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
