function validate() {

    document.getElementById("company").addEventListener("change", () => {
        document.getElementById("company").checked ?
            document.getElementById("companyInfo").style.display = "block"
            : document.getElementById("companyInfo").style.display = "none";
    });

    document.getElementById("submit").addEventListener('click', validationFunc);

    function validationFunc(e) {
        e.preventDefault();
        let incorrectValidFiled = [];
        let [usernameEl, emailEl, passwordEl, confirmPasswordEl, companyEl, companyNumberEl] =
            document.querySelectorAll('input');
        let [username, email, password, confirmPassword, company, companyNumber] =
            Array.from(document.querySelectorAll('input')).map(x => x.value);
        let usernamePattern = /[^A-Za-z0-9]+/;
        let passwordPattern = /[^A-Za-z0-9_]+/;
        let emailPattern = /@(\w)*\./;
        if (username.length < 3 || username.length > 20 || usernamePattern.test(username)) {
            incorrectValidFiled.push(usernameEl);
        }
        if (password.length < 5 || password.length > 15 || 
            passwordPattern.test(password) || confirmPassword !== password) {
            incorrectValidFiled.push(passwordEl);
            incorrectValidFiled.push(confirmPasswordEl);
        }
        if (!emailPattern.test(email)) {
            incorrectValidFiled.push(emailEl);
        }
        if (companyNumber.length != 4&&companyEl.checked) {
            incorrectValidFiled.push(companyNumberEl);
        }
        incorrectValidFiled.map(x => x.style.borderColor = 'red');

        incorrectValidFiled.length==0?
        document.getElementById("valid").style.display= "block"
        :document.getElementById("valid").style.display= "none";
    }
}
