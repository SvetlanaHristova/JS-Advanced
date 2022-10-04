function encodeAndDecodeMessages() {

    let sendButonElement = document.querySelectorAll('button')[0];
    let decodeButtonElement = document.querySelectorAll('button')[1];
    
    sendButonElement.addEventListener("click", codeEndSend);
    decodeButtonElement.addEventListener("click", decodeText);


    function codeEndSend() {
        let inputTextElement = document.querySelectorAll("textarea")[0];
        let inputText = inputTextElement.value;
        let sendText = "";
        for (let ch of inputText) {
            sendText += String.fromCharCode(ch.charCodeAt() + 1);
        };
        document.querySelectorAll("textarea")[1].value = sendText;
        document.querySelectorAll("textarea")[0].value ="";

    }
    function decodeText() {
        let inputTextElement = document.querySelectorAll("textarea")[1];
        let inputText = inputTextElement.value;
        let sendText = "";
        for (let ch of inputText) {
            sendText += String.fromCharCode(ch.charCodeAt() - 1);
        };
        document.querySelectorAll("textarea")[1].value = sendText;
    }
}
