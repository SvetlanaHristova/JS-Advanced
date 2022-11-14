function solution() {

    let inputElement = document.querySelector('input');
    let addBtn = document.querySelector('div button');

    addBtn.addEventListener('click', addFunc);

    function addFunc(e) {
        if (inputElement.value === '') {
            return;
        }
        let parentElement = document.querySelectorAll('section ul')[0];
        let liElement = createEl('li', `${inputElement.value}`, 'gift');
        let sendBtn = createEl('button', 'Send');
        sendBtn.setAttribute('id', 'sendButton');
        let discardBtn = createEl('button', 'Discard');
        discardBtn.setAttribute('id', 'discardButton');
        liElement.appendChild(sendBtn);
        liElement.appendChild(discardBtn);
        parentElement.appendChild(liElement);
        inputElement.value = "";
        let arr = Array.from(document.querySelectorAll('section ul li'))
            .map(x => x.firstChild.textContent)
            .sort((a, b) => (a).localeCompare(b));

        for (let i = 0; i < arr.length; i++) {
            document.querySelectorAll('section ul')[0].children[i].firstChild.textContent = arr[i];
        }

        sendBtn.addEventListener('click', sendFunc);
        discardBtn.addEventListener('click', discardFunc);
    }

    function sendFunc(e) {
        document.querySelectorAll('section ul')[1].appendChild(e.currentTarget.parentElement);
        e.currentTarget.nextSibling.remove();
        e.currentTarget.remove();
    }

    function discardFunc(e) {
        document.querySelectorAll('section ul')[2].appendChild(e.currentTarget.parentElement);
        e.currentTarget.previousSibling.remove();
        e.currentTarget.remove();
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

    
 */
