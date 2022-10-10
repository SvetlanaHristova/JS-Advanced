function solve() {


    let name = document.querySelectorAll('input')[0];
    let hall = document.querySelectorAll('input')[1];
    let ticketPrice = document.querySelectorAll('input')[2];


    document.querySelector("#container > button").addEventListener("click", prevent)

    function prevent(event) {
        event.preventDefault();

        if (name.value && hall.value && Number(ticketPrice.value)) {
            let liElement = document.createElement('li');
            liElement.appendChild(createEl('span', name.value));
            let srongElement=createEl('strong', `Hall: ${hall.value}`)
            liElement.appendChild(srongElement);
            let divElement = document.createElement('div');
            divElement.appendChild(createEl('strong', Number(ticketPrice.value).toFixed(2)));
            divElement.appendChild(createEl('input', "Ticket Sold", 'placeholder'));
            let buttonArhive = createEl('button', "Arhive")
            divElement.appendChild(buttonArhive);
            liElement.appendChild(divElement)
            document.getElementById("movies").children[1].appendChild(liElement)

            name.value = "";
            hall.value = "";
            ticketPrice.value = "";

            buttonArhive.addEventListener("click", arhFunc)

            function arhFunc() {
                
                srongElement.value=`Total amount: ${total price}`
                document.getElementById("archive").children[1].appendChild(liElement)

            }
        } else { console.log('error', name.value, hall.value, ticketPrice.value) }
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