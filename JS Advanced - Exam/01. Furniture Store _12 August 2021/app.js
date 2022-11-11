window.addEventListener('load', solve);

function solve() {
    let [model, year, price] = document.querySelectorAll('input');
    let description = document.getElementById("description");
    document.getElementById("add").addEventListener('click', add)

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
        let yearTd=createEl('td',`Year: ${year.value}`);
        let td=createEl('td',`Description: ${description.value}`);
        td.setAttribute('colspan','3');
        hideTR.appendChild(yearTd);
        hideTR.appendChild(td)
        infoTR.appendChild(modelTD);
        infoTR.appendChild(priceTD);
        infoTR.appendChild(tdElement);
       
        document.getElementById("furniture-list").appendChild(infoTR);
        document.getElementById("furniture-list").appendChild(hideTR);

        Array.from(document.querySelectorAll('input')).map(x => x.value = "");
        description.value="";

        moreButton.addEventListener('click',more);
        buyButton.addEventListener('click',buy) ;
    }
    function more(e){
        e.currentTarget.textContent='Less Info';
        e.currentTarget.parentElement.parentElementnextSibling.!!!
        
    }
    function bye(e){

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
/*
console.log('yes')

 let [] = document.querySelectorAll('input');

 document.getElementById(".....").addEventListener('click', func1);
    function func1(e) {
        e.preventDefault();
    
    }

    if (_____.value === "" || (_____.value === "" || (_____.value === "" ||
        _____.value === "" || _____.value === "" || _____.value === ""){
            return;
        }

        .appendChild(tdFNameElements);
        .textContent
         Array.from(_________).map(x => x.value = "")
    
    function edit(e) {
        let parentEl = e.currentTarget.parentElement;     
        = parentEl.children[0].textContent;

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
 */

