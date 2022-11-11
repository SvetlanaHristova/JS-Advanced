window.addEventListener('load', solve);

function solve() {
    let descriptionElement = document.getElementById("description");
    let [nameElement, phoneElement] = document.querySelectorAll('input');
    let type = document.getElementById("type-product");
    document.querySelectorAll("form button")[0].addEventListener('click', send);

    function send(e) {
        e.preventDefault();

        if (descriptionElement.value === "" ||
            nameElement.value === "" ||
            phoneElement.value === "") {
            return;
        }
        let sectionElement = document.getElementById("received-orders");
        let divElement = createEl('div', '', 'container');
        let h2Element = createEl('h2', `Product type for repair: ${type.options[type.selectedIndex].text}`);
        let h3Element = createEl('h3', `Client information: ${nameElement.value}, ${phoneElement.value}`);
        let h4Element = createEl('h4', `Description of the problem: ${descriptionElement.value}`);
        let startElement = createEl('button', 'Start repair', 'start-btn');
        let finishElement = createEl('button', 'Finish repair', 'finish-btn');
        finishElement.disabled = true;

        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element);
        divElement.appendChild(startElement);
        divElement.appendChild(finishElement);
        sectionElement.appendChild(divElement);

        descriptionElement.value = "";
        Array.from(document.querySelectorAll('input')).map(x => x.value = "");

        startElement.addEventListener('click', start);

    }
    function start(e) {
        e.currentTarget.disabled = true;
        e.currentTarget.nextSibling.disabled = false;
        e.currentTarget.nextSibling.addEventListener('click', finish);
    }
    function finish(e) {
        let parentEl = e.currentTarget.parentElement;
        e.currentTarget.previousSibling.remove();
        e.currentTarget.remove();
        document.getElementById("completed-orders").appendChild(parentEl);
        document.querySelectorAll('button.clear-btn')[0].addEventListener('click',clear);
    }
    function clear() {
        let elementForDelate=document.querySelectorAll('#completed-orders div');
        Array.from(elementForDelate).map(x => x.remove());
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
