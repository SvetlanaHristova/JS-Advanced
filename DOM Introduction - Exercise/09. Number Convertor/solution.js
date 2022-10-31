function solve() {
    let inputNumberElement = document.querySelector("#input");
    let parentElement = document.querySelector("#selectMenuTo");
    let button = document.querySelector('button');
    let result = document.querySelector("#result");

    let binaryElement = document.createElement("option");
    binaryElement.value = 'binary';
    binaryElement.textContent = 'Binary';
    parentElement.appendChild(binaryElement);

    let hexadecimalElement = document.createElement('option');
    hexadecimalElement.value = 'hexadecimal';
    hexadecimalElement.textContent = 'Hexadecimal';
    parentElement.appendChild(hexadecimalElement);   //може и parentElement.add(hexadecimalElement)

    let option = {
        binary: (num) => num.toString(2),
        hexadecimal: (num) => num.toString(16).toUpperCase(),
        "": (num) => num
    };

    button.addEventListener('click', ()=>{
        result.value = option[parentElement.value](Number(inputNumberElement.value));
    });
    
}