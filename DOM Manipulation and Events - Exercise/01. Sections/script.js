function create(words) {
   let parentElement = document.querySelector("#content");

   for (let word of words) {
      let divElement = document.createElement('div');
      let pElement = document.createElement('p');
      pElement.style.display = "none";
      pElement.textContent = word;
      divElement.appendChild(pElement);
      divElement.addEventListener('click', onClick);
      parentElement.appendChild(divElement);

   }

   function onClick(element) {

      let p = element.target.firstChild;
      p.style.display = "block";

   }

}