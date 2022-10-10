function calculator() {

    let num1 = null;
    let num2 = null;
    let res = null;

    return {

        init(selector1, selector2, resultSelector) {
            num1 = document.querySelector(selector1);
            num2 = document.querySelector(selector2);
            res = document.querySelector(resultSelector);
        },
        add() { return res.value = Number(num1.value) + Number(num2.value) },

        subtract() { return res.value = Number(num1.value) - Number(num2.value) },

    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');




