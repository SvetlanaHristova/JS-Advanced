window.addEventListener('load', solve);

function solve() {
    let [model, year, price] = document.querySelectorAll('input');
    let description = document.getElementById("description");
    document.getElementById("add").addEventListener('click', add);

    function add(e) {
        e.preventDefault();

        if (model.value === "" || description.value === "" ||
            year.value <= 0 || price.value <= 0) {
            return;
        }
        let modelTD = createEl('td', model.value);
        let priceTD = createEl('td', Number(price.value).toFixed(2));
        let infoTR = createEl('tr', '', 'info');
        let moreButton = createEl('button', 'More Info', 'moreBtn');
        let buyButton = createEl('button', 'Buy it', 'buyBtn');
        let tdElement = createEl('td');
        tdElement.appendChild(moreButton);
        tdElement.appendChild(buyButton);
        let hideTR = createEl('tr', '', 'hide');
        let yearTd = createEl('td', `Year: ${year.value}`);
        let td = createEl('td', `Description: ${description.value}`);
        td.setAttribute('colspan', '3');
        hideTR.appendChild(yearTd);
        hideTR.appendChild(td)
        infoTR.appendChild(modelTD);
        infoTR.appendChild(priceTD);
        infoTR.appendChild(tdElement);

        document.getElementById("furniture-list").appendChild(infoTR);
        document.getElementById("furniture-list").appendChild(hideTR);

        Array.from(document.querySelectorAll('input')).map(x => x.value = "");
        description.value = "";

        moreButton.addEventListener('click', more);
        buyButton.addEventListener('click', bye);
    }

    function more(e) {
        let el = e.currentTarget.parentElement.parentElement.nextSibling;
        if (e.currentTarget.textContent === 'More Info') {
            e.currentTarget.textContent = 'Less Info';
            el.setAttribute('style', "display: contents;");
        } else {
            e.currentTarget.textContent = 'More Info';
            el.style = "display: none";
        }
    }

    function bye(e) {
        let totalPriceElement = document.getElementsByClassName("total-price")[0];
        let priceElement = e.currentTarget.parentElement.parentElement.children[1];
        totalPriceElement.textContent = (Number(totalPriceElement.textContent) + Number(priceElement.textContent)).toFixed(2);
        e.currentTarget.parentElement.parentElement.nextSibling.remove();
        e.currentTarget.parentElement.parentElement.remove();
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


