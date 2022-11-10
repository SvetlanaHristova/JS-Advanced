function solve() {
    let [recipientNameElement, titleElement] = document.querySelectorAll('input');
    let messageElement = document.getElementById("message");
    document.getElementById("add").addEventListener('click', add);
    document.getElementById("reset").addEventListener('click', reset);

    function add(e) {
        e.preventDefault();
        if (recipientNameElement.value === "" || titleElement.value === "" || messageElement.value === "") {
            return;
        }

        let [title, recipientName, message] = [titleElement.value, recipientNameElement.value, messageElement.value];
        let liElement = createEl('li');
        let h4TitleElement = createEl('h4', `Title: ${title}`);
        let h4RecipientElement = createEl('h4', `Recipient Name: ${recipientName}`);
        let spanElement = createEl('span', message);
        let divElement = createEl('div');
        divElement.setAttribute('id', 'list-action');
        let buttonSendElement = createEl('button', 'Send');
        buttonSendElement.setAttribute('id', 'send');
        buttonSendElement.setAttribute('type', 'submit');
        let buttonDeleteElement = createEl('button', 'Delete');
        buttonDeleteElement.setAttribute('id', 'delete');
        buttonDeleteElement.setAttribute('type', 'submit');

        divElement.appendChild(buttonSendElement);
        divElement.appendChild(buttonDeleteElement);
        liElement.appendChild(h4TitleElement);
        liElement.appendChild(h4RecipientElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(divElement);
        document.getElementById("list").appendChild(liElement);

        recipientNameElement.value = "";
        titleElement.value = "";
        messageElement.value = "";

        buttonSendElement.addEventListener('click', send);
        buttonDeleteElement.addEventListener('click', del);

    }

    function reset(e) {
        e.preventDefault();

        recipientNameElement.value = "";
        titleElement.value = "";
        messageElement.value = "";

    }

    function send(e) {

        let parentElement = e.currentTarget.parentElement.parentElement;

        let liElement = createEl('li');
        let textTo = parentElement.children[1].textContent.replace('Recipient Name', 'To');
        let spanToElement = createEl('span', textTo);
        let spanTitleElement = createEl('span', parentElement.children[0].textContent);
        let divElement = createEl("div", "", "btn");
        let deleteButton = createEl('button', 'Delete');
        deleteButton.setAttribute('type', 'submit');
        deleteButton.setAttribute('class', 'delete');

        parentElement.remove();

        divElement.appendChild(deleteButton);
        liElement.appendChild(spanToElement);
        liElement.appendChild(spanTitleElement);
        liElement.appendChild(divElement);
        document.querySelectorAll("ul.sent-list")[0].appendChild(liElement);

        deleteButton.addEventListener('click', delSend);

    }

    function del(e) {
        let parentElement = e.currentTarget.parentElement.parentElement;

        let liElement = createEl('li');
        let textTo = parentElement.children[1].textContent.replace('Recipient Name', 'To');
        let spanToElement = createEl('span', textTo);
        let spanTitleElement = createEl('span', parentElement.children[0].textContent);
        parentElement.remove();
        liElement.appendChild(spanToElement);
        liElement.appendChild(spanTitleElement);
        document.querySelectorAll("ul.delete-list")[0].appendChild(liElement);
    }

    function delSend(e) {
        let parentElement = e.currentTarget.parentElement.parentElement;
        document.querySelectorAll("ul.delete-list")[0].appendChild(parentElement);
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
solve()