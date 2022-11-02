function solve() {
    let buttonsElement = document.querySelectorAll('button');
    let tableRowElements = document.querySelectorAll("tbody tr");
    let quickCheck = document.querySelector('#check p');

    buttonsElement[0].addEventListener("click", check);
    buttonsElement[1].addEventListener("click", clear);

    function check() {
        let isRight = true;

        for (i = 0; i < tableRowElements.length; i++) {
            let row = new Set();
            let column = new Set();

            for (j = 0; j < tableRowElements.length; j++) {
                row.add(tableRowElements[i].children[j].querySelector("input").value);
                column.add(tableRowElements[j].children[i].querySelector("input").value);
            }
            
            if (row.size < tableRowElements.length || column.size < tableRowElements.length) {
                isRight = false;
                break;
            }
        }

        document.querySelector("table").style.border = isRight ? "2px solid green" : "2px solid red";
        quickCheck.textContent = isRight ? "You solve it! Congratulations!" : "NOP! You are not done yet...";
        quickCheck.style.color = isRight ? "green" : "red";
    }

    function clear() {
        [...document.querySelectorAll("input")].forEach(x => x.value = "");
        quickCheck.textContent = "";
        document.querySelector("table").style.border = "none";
    }
}
