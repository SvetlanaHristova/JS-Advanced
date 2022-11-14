function solve() {
    let [authorElement, titleElement, categoryElement] = document.querySelectorAll('input');
    let contentElement = document.querySelectorAll('textarea')[0];

    document.getElementsByClassName('btn create')[0].addEventListener('click', createFunc);

    function createFunc(e) {
        e.preventDefault();

        let parentElement = document.querySelectorAll("section")[1];
        let articleElement = createEl('article');
        let h1Element = createEl('h1', titleElement.value);
        let pElement1 = createEl('p', 'Category:');
        pElement1.appendChild(createEl('strong', categoryElement.value));
        let pElement2 = createEl('p', 'Creator:');
        pElement2.appendChild(createEl('strong', authorElement.value));
        let pElement3 = createEl('p', contentElement.value);
        let divElement = createEl('div', "", 'buttons');
        let delButton = createEl('button', 'Delete', 'btn delete');
        let arhButton = createEl('button', 'Archive', 'btn archive');
        divElement.appendChild(delButton);
        divElement.appendChild(arhButton);
        articleElement.appendChild(h1Element);
        articleElement.appendChild(pElement1);
        articleElement.appendChild(pElement2);
        articleElement.appendChild(pElement3);
        articleElement.appendChild(divElement);
        parentElement.appendChild(articleElement);

        delButton.addEventListener('click', dellFunc);
        arhButton.addEventListener('click', arhFunc);

        Array.from(document.querySelectorAll('input')).map(x => x.value = "");
        document.querySelectorAll('textarea')[0].value = "";
    }
    function dellFunc(e) {
        e.currentTarget.parentElement.parentElement.remove();
    }
    function arhFunc(e) {
        let title = e.currentTarget.parentElement.parentElement.firstChild.textContent;
        let liElement = createEl('li', title);
        document.querySelectorAll(".archive-section ol")[0].appendChild(liElement);
        e.currentTarget.parentElement.parentElement.remove();
        let elements = Array.from(document.querySelectorAll(".archive-section ol li"));
        let arr = elements.map(x => x.textContent).sort((a, b) => (a).localeCompare(b));

        for (i = 0; i < arr.length; i++) {

            elements[i].textContent = arr[i];

        }
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
