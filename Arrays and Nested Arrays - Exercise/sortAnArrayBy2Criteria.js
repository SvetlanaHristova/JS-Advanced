function sortAnArrayBy2Criteria(arr) {
    let res = arr.sort((a, b) => {
        return a.length - b.length ||
            a.localeCompare(b)
    });
    console.log(res.join('\n'))
}
sortAnArrayBy2Criteria(['alpha',
    'beta',
    'gamma']);
sortAnArrayBy2Criteria(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);
sortAnArrayBy2Criteria(['test',
    'Deny',
    'omen',
    'Default'])