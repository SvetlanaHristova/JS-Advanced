function solve() {
    let [fNameElements, lNamesElements, emailElement, dateOfBirthElements, positionElements, salaryElements] = document.querySelectorAll('input');
    let sumElement = document.getElementById('sum');
    document.getElementById("add-worker").addEventListener('click', addToTable);
    function addToTable(e) {
        e.preventDefault();

        if (fNameElements.value === "" || lNamesElements.value === "" || emailElement.value === "" ||
            dateOfBirthElements.value === "" || positionElements.value === "" || salaryElements.value === "") {
            return;
        }

        let trElement = createEl('tr');
        let tdFNameElements = createEl('td', fNameElements.value);
        let tdLNamesElements = createEl('td', lNamesElements.value);
        let tdEmailElement = createEl('td', emailElement.value);
        let tdDateOfBirthElements = createEl('td', dateOfBirthElements.value);
        let tdPositionElements = createEl('td', positionElements.value);
        let tdSalaryElements = createEl('td', salaryElements.value);
        let tdElement = createEl('td');
        let editButtonElement = createEl('button', 'Edit', 'edit');
        let firedButtonElement = createEl('button', 'Fired', 'fired');
        trElement.appendChild(tdFNameElements);
        trElement.appendChild(tdLNamesElements);
        trElement.appendChild(tdEmailElement);
        trElement.appendChild(tdDateOfBirthElements);
        trElement.appendChild(tdPositionElements);
        trElement.appendChild(tdSalaryElements);
        tdElement.appendChild(firedButtonElement);
        tdElement.appendChild(editButtonElement);
        trElement.appendChild(tdElement);
        document.getElementById('tbody').appendChild(trElement);

        sumElement.textContent = (Number(sumElement.textContent) + Number(salaryElements.value)).toFixed(2);

        firedButtonElement.addEventListener('click', fired);
        editButtonElement.addEventListener('click', edit);

        Array.from(document.querySelectorAll('input')).map(x => x.value = "");
    }


    function edit(e) {
        let parentEl = e.currentTarget.parentElement.parentElement;
        fNameElements.value = parentEl.children[0].textContent;
        lNamesElements.value = parentEl.children[1].textContent;
        emailElement.value = parentEl.children[2].textContent;
        dateOfBirthElements.value = parentEl.children[3].textContent;
        positionElements.value = parentEl.children[4].textContent;
        salaryElements.value = parentEl.children[5].textContent;
        sumElement.textContent = (Number(sumElement.textContent) - Number(salaryElements.value)).toFixed(2);

        parentEl.remove();

    }
    function fired(e) {
        let parentEl = e.currentTarget.parentElement.parentElement;
        sumElement.textContent = (Number(sumElement.textContent) - Number(parentEl.children[5].textContent)).toFixed(2);
        parentEl.remove();
    }
    function createEl(type, content, classContent) {
        let element = document.createElement(type);

        if (content) {
            element.textContent = content;
        }

        if (classContent) {
            element.className = classContent;
        }
        return element;
    }
}
solve()