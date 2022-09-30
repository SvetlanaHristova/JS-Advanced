function generateReport() {
    let textResult = document.getElementById("output");
    let heding = document.querySelectorAll("input");
    let information = document.querySelectorAll("tbody tr");

    let result = [];
    for (let i = 0; i < information.length; i++) {
        let obj = {};

        for (let j = 0; j < heding.length; j++) {
            if (heding[j].checked) {   //това е при checkbox да е маркирано
                obj[heding[j].name] = information[i].children[j].textContent

            }

        }
        result.push(obj)
    }


    textResult.textContent = JSON.stringify(result)
}


