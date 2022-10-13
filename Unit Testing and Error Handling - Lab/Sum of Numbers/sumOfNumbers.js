function sum(arr) {
    let sum = 0;
    for (let num of arr){
        sum += Number(num);
    }
    return sum;
}
module.exports = sum;
console.log(sum(1,2,3,4,5,6))