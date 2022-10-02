function validate() {
    let pattern = /[a-z]+@[a-z]+[.]+[a-z]+/;
    let email = document.querySelector("#email");
    email.addEventListener('change', validator);

    function validator() {

        if (pattern.test(email.value)) {      //този метод връща true/false -има или не шаблони текста
            email.classList.remove("error");
        } else {
            email.classList.add("error");
        };

    };
};