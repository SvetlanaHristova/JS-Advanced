function addItem() {
    let inputElement = document.getElementById("newItemText");
    let parentElement = document.getElementById("items");
    let newElement = document.createElement('li');
    newElement.textContent = inputElement.value;
    parentElement.appendChild(newElement);
    inputElement.value = "";                // thi is first problem

    let deleteElement = document.createElement("a")   //направих елемент а
    deleteElement.href = "#"                             //добових атрибут href
    //newElement.setAtribute(deleteElement) това не работи
    deleteElement.textContent = '[Delete]'      //добавям стойност
    newElement.appendChild(deleteElement)       //залепя ме го като дете за новия елемент
   
    deleteElement.addEventListener('click',deleteItem)   
    
    function deleteItem(el){
        el.currentTarget.parentElement.remove();
    }
    //console.log(deleteElement)
}