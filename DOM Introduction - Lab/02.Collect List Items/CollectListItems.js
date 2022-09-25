function extractText() {
    let list = document.querySelectorAll('ul#items li');
    let result = document.querySelector('#result');
    for (let el of list) {
        result.value += el.textContent+'\n';
    }
}