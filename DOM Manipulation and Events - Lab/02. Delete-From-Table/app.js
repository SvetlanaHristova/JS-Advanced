function deleteByEmail() {
    let inputElement = document.querySelector("input[type=text]");
    let columnElements = document.querySelectorAll("tbody tr td:nth-child(2)");
    let resultElement = document.querySelector("#result")
    for (let email of columnElements) {
        if (email.textContent === inputElement.value) {
            email.parentElement.remove();
            resultElement.textContent = "Deleted."
        }else{
            resultElement.textContent ="Not found."
        }
    }
}   