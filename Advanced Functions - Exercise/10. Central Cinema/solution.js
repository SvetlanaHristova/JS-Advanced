function solve() {
    let [name, hall, ticketPrice] = document.querySelectorAll('input');

    document.querySelector("#container button").addEventListener("click", add);

    function add(event) {
        event.preventDefault();

        if (name.value && hall.value && Number(ticketPrice.value)) {

            let liElement = document.createElement('li');
            let spanElement = createEl('span', name.value);
            liElement.appendChild(spanElement);
            let srongElement = createEl('strong', `Hall: ${hall.value}`);
            liElement.appendChild(srongElement);
            let divElement = document.createElement('div');
            let strongEl = createEl('strong', Number(ticketPrice.value).toFixed(2));
            divElement.appendChild(strongEl);
            let newInput = createEl('input', "Ticket Sold", 'placeholder');
            divElement.appendChild(newInput);
            let buttonArchive = createEl('button', "Archive");
            divElement.appendChild(buttonArchive);
            liElement.appendChild(divElement);
            document.getElementById("movies").children[1].appendChild(liElement);

            name.value = "";
            hall.value = "";
            ticketPrice.value = "";

            buttonArchive.addEventListener("click", arhFunc);
            document.querySelector("#archive button").addEventListener("click", clearFunc);

            function arhFunc(e) {
                let count = e.target.parentElement.children[1].value;

                if (Number(count) > 0 || count === "0") {
                    let price = e.target.parentElement.children[0].textContent;
                    let totalPrice = price * count;
                    console.log(count, price, totalPrice)

                    document.getElementById("archive").children[1].appendChild(liElement)
                    srongElement.innerText = `Total amount: ${totalPrice.toFixed(2)}`
                    let buttonDelete = createEl("button", "Delete")
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