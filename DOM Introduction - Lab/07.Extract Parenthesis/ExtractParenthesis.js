function extract(content) {
    let text = document.getElementById('content').textContent;
    return text.match(/\([A-z ]+\)/g).join('; ');
}
