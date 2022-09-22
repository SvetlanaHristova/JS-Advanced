function listOfNames(arr) {
    let res = arr.sort((a, b) => a.localeCompare(b))
        .map((element, index) => {
            return `${index + 1}.${element}`
        });
    console.log(res.join('\n'));
}

listOfNames(["John", "Bob", "Christina", "Ema"])
