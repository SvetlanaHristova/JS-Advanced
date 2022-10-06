function listProcessor(arr) {
    let res = [];
    obj = {
        add: (str) => {
            return res.push(str)
        },
        remove: (str) => {
            return res=res.filter(x => x != `${str}`)
        },
        print: () => {
            console.log(res.join(','))
        }
    };

    for (let string of arr) {

        let [command, str] = string.split(" ");
        obj[command](str);

    }

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])
