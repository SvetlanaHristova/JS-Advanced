function solve() {
    let name = document.querySelectorAll('input')[0];
    let hall = document.querySelectorAll('input')[1];
    let ticketPrice = document.querySelectorAll('input')[2];

    document.querySelector("#container > button").addEventListener("click", prevent);

    function prevent(event) {
        event.preventDefault();

        if (name.value && hall.value && Number(ticketPrice.value)) {

            let liElement = document.createElement('li');
            liElement.appendChild(createEl('span', name.value));
            let srongElement = createEl('strong', `Hall: ${hall.value}`);
            liElement.appendChild(srongElement);
            let divElement = document.createElement('div');
            divElement.appendChild(createEl('strong', Number(ticketPrice.value).toFixed(2)));
            divElement.appendChild(createEl('input', "Ticket Sold", 'placeholder'));
            let buttonArchive = createEl('button', "Archive");
            divElement.appendChild(buttonArchive);
            liElement.appendChild(divElement);
            document.getElementById("movies").children[1].appendChild(liElement);

            //let totalPrice = Number(ticketPrice.value);
            name.value = "";
            hall.value = "";
            ticketPrice.value = "";

            buttonArchive.addEventListener("click", arhFunc)
            document.querySelector("#archive button").addEventListener("click", clearFunc)

            function arhFunc(e) {
                let count = e.target.previousElementSibling.textContent

                if (Number(count) || Number(count) === 0) {
                    let price = e.target.parentElement.firstElementChild.textContent
                    let totalPrice = price * count

                    document.getElementById("archive").children[1].appendChild(liElement)
                    srongElement.innerText = `Total amount: ${totalPrice.toFixed(2)}`
                    let buttonDelete = document.createElement("button")
                    buttonDelete.textContent = "Delete"
                    liElement.appendChild(buttonDelete)


                    divElement.remove()
                    buttonDelete.addEventListener("click", () => buttonDelete.parentElement.remove())
                }
            }
        }
    }

    function clearFunc() {
        Array.from(document.querySelectorAll("#archive li")).map(x => x.remove())
    }

    function createEl(type, content, atributeName) {
        let element = document.createElement(type);

        if (atributeName) {
            element.setAttribute(atributeName, content)
        } else {
            element.textContent = content;
        }
        return element;
    }
}