function addItem() {
   let inputElement=document.getElementById("newItemText");
   let parentElement=document.getElementById("items");
   let newElement=document.createElement('li');
   newElement.textContent=inputElement.value;
   parentElement.appendChild(newElement);
   inputElement.value="";
}