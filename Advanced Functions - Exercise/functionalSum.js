function add(num) {
    let sum = function (a) {
        num += a
        //console.log(num)
        // console.log(sum)

        return sum
    }
    sum.toString = function () {
        return num
    }
    return sum
}
console.log(add(1)(6)(-4)(8))

