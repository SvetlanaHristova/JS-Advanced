function heroicInventory(data) {
    let res = [];
    
    data.map(x => x.split(' / '))
        .map(el => {
            let obj = {};
            obj['name'] = el[0];
            obj['level'] = Number(el[1]);
            let items = el[2] ? el[2].split(', ') : [];
            obj['items'] = items;
            res.push(obj);
        });

    return JSON.stringify(res);
}
console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));
console.log(heroicInventory(['Jake / 1000 / ']));