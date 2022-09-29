function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText = document.getElementById("searchField").value;
      let tableInfo = document.querySelectorAll("tbody tr");

      for (let el of tableInfo) {
         
         el.classList.remove("select");
         
         if (el.textContent.match(searchText)) {
            el.style.background = "yellow";
            el.className="select";
         }   
        
      }
      searchText.value="";
   }
}