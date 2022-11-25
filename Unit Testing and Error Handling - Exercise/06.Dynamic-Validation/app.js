function validate() {
    let input = document.getElementById("email");
    let patternInput = /[a-z]+@[a-z]+.[a-z]+/;
    input.addEventListener('change', ()=> {
        if (!patternInput.test(input.value)) {
            input.className = "error";
        }else{
            input.classList.remove("error");
        }
    })
}