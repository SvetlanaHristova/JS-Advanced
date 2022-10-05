function solution(num) {

    return function (addition) {
        
        let result= num+addition;
       return result;
    }
}

let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
