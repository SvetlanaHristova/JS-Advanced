function addAndRemoveElements(arr) {
    let res = [];
    let curentEl = 0;
    for (let command of arr) {
        curentEl++;
        command === 'add' ? res.push(curentEl) : res.pop();
    };
    console.log(res.length === 0 ? "Empty" : res.join('\n'))
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);
addAndRemoveElements(['remove',
    'remove',
    'remove']
)
