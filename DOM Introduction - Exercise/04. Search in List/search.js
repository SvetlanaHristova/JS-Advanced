function search() {
   let search = document.getElementById("searchText").value;
   let listTowns = Array.from(document.querySelectorAll("ul li"));
   let counter = 0;

   for (let town of listTowns) {
      if (town.textContent.includes(search)) {
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
         counter++
      } else {
         town.style.textDecoration = "none";
         town.style.fontWeight = "";
      }
   }
   document.getElementById("result").textContent = `${counter} matches found`

}
