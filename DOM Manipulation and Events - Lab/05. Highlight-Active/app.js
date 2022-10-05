function focused() {
    let divElements = document.querySelectorAll("input");
    for (let divElement of divElements) {
        divElement.addEventListener('focus', makeClass);
        divElement.addEventListener('blur', deleteClass);
    }
    function makeClass(el) {
        el.target.parentElement.classList.add("focused");
    }
    function deleteClass(el) {
        el.target.parentElement.classList.remove("focused");
    }
    console.log(divElements);
}