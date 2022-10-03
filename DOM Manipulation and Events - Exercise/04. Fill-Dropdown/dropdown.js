function addItem() {
    let parentElement = document.querySelector("#menu");
    let newElement = document.createElement('option');
    newElement.textContent = document.getElementById('newItemText').value;
    newElement.value = document.getElementById('newItemValue').value;
    parentElement.appendChild(newElement);
    document.getElementById('newItemText').value = "";
    document.getElementById('newItemValue').value = "";
}

