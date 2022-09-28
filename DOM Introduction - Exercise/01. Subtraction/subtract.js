function subtract() {
    
    let arr=Array.from(document.querySelectorAll('input'))
    let num1=arr[0].value;
    let num2=arr[1].value;
    let res=num1-num2;
    let result=document.getElementById("result");
    result.textContent=res;
    
}