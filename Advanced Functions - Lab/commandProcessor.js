function commandProcessor() {
    let string = "";
    return {
        append: function append(str) {
            return string += str;
        },
        removeStart: function removeStart(n) {
            let arr = string.split("");
            arr.splice(0, n);
            return string = arr.join("");
        },
        removeEnd: function removeEnd(n) {
            let arr = string.split("");
            arr.splice(-n, n);
            return string = arr.join("");
        },
        print: function print() {
            console.log(string);
        }
    }
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

console.log("------------------")

let secondZeroTest = commandProcessor();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
