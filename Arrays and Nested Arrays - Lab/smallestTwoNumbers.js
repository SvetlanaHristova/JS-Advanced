function smallestTwoNumbers(arr) {
  let res = arr.sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
  console.log(res);
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3])