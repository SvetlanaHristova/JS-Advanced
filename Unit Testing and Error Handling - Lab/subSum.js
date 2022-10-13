function subSum(arr, startIndex, endIndex) {
    let res = 0;
    if (!Array.isArray(arr)) {  //Защо typeof(array)='object'?
        return NaN;
    }
    if (startIndex < 0) {
        startIndex = 0;
    }
    if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
    for (let i = startIndex; i <= endIndex; i++) {
        res += Number(arr[i]);
    }
    return res;
}
console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subSum([10, 'twenty', 30, 40], 0, 2));
console.log(subSum([], 1, 2));
console.log(subSum('text', 0, 2));