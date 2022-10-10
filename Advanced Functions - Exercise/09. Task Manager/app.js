function solve() {
    let input = {
        task: document.getElementById("task"),
        description: document.getElementById("description"),
        date: document.getElementById("date")
    }
    document.getElementById('add').addEventListener("click", prevent);
    let [_, openFild, inProgress, complete] = Array.from(document.querySelectorAll('section')).map(x => x.children[1]);

    function prevent(event) {
        event.preventDefault(); //това е за да спре формуляра да рефрешва страницата

        let articleElement = document.createElement("article");

        articleElement.appendChild(createEl("h3", input.task.value));
        articleElement.appendChild(createEl("p", `Description: ${input.description.value}`));
        articleElement.appendChild(createEl("p", `Due Date: ${input.date.value}`));

        let divElement = createEl('div', "", 'flex');
        let startButton = createEl('button', "Start", 'green');
        let deleteButton = createEl('button', "Delete", 'red');
        let finishButton = createEl('button', "Finish", 'orange');

        divElement.appendChild(startButton);
        divElement.appendChild(deleteButton);
        articleElement.appendChild(divElement);
        openFild.appendChild(articleElement);

        Object.values(input).forEach(i => i.value = "");  //това ресетва всичко накрая в open полетата

        startButton.addEventListener('click', startFunc);
        deleteButton.addEventListener('click', deleteFunc);
        finishButton.addEventListener('click', finishFunc);

        function startFunc() {
            startButton.remove();
            divElement.appendChild(finishButton);
            inProgress.appendChild(articleElement)  //мести се от един родител на друг
        }
        function deleteFunc() {
            articleElement.remove()
        }
        function finishFunc() {
            divElement.remove();
            complete.appendChild(articleElement)
        }
    }

    function createEl(type, content, className) {
        let element = document.createElement(type);
        element.textContent = content;
        if (className) {
            element.className = className;
        }
        return element;
    }

}