function solve() {
    let [taskElement, dateElement] = document.querySelectorAll('input');
    let descriptionElement = document.querySelector('textarea');

    let addButton = document.getElementById('add');
    addButton.addEventListener('click', addFunc);
    function addFunc(e) {
        e.preventDefault();
        if (taskElement.value === "" || dateElement.value === "" || descriptionElement.value === "") {
            return;
        }
        let parentElement = document.querySelectorAll('section')[1].children[1];
        let articleElement = createEl('article');
        articleElement.appendChild(createEl('h3', taskElement.value));
        articleElement.appendChild(createEl('p', `Description: ${descriptionElement.value}`));
        articleElement.appendChild(createEl('p', `Due Date: ${dateElement.value}`));
        let startBtn = createEl('button', 'Start', 'green');
        let deleteBtn = createEl('button', 'Delete', 'red');
        let divElement = createEl('div', "", 'flex');
        divElement.appendChild(startBtn);
        divElement.appendChild(deleteBtn);
        articleElement.appendChild(divElement);
        parentElement.appendChild(articleElement);
        Array.from(document.querySelectorAll('input'))
            .map(n => n.value = "");
        document.querySelector('textarea').value = "";

        startBtn.addEventListener('click', startFunc);
        deleteBtn.addEventListener('click', deleteFunc);
    }
    function deleteFunc(e) {
        e.currentTarget.parentElement.parentElement.remove();
    }

    function startFunc(e) {
        document.querySelectorAll('section')[2].children[1]
            .appendChild(e.currentTarget.parentElement.parentElement);
        let finishBtn = createEl('button', 'Finish', 'orange');
        e.currentTarget.parentElement.appendChild(finishBtn);
        e.currentTarget.remove();

        finishBtn.addEventListener('click', finishFunc);

    }

    function finishFunc(e) {
        document.querySelectorAll('section')[3].children[1]
            .appendChild(e.currentTarget.parentElement.parentElement);
        e.currentTarget.parentElement.remove();
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