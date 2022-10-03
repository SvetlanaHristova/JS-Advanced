function solve() {
   document.getElementsByClassName("shopping-cart")[0].addEventListener('click', addToList);
   document.getElementsByClassName("checkout")[0].addEventListener('click', addResult);
   let textarea = document.querySelector("div textarea");
   let productInBag = new Set();
   let totalPrice = 0;
   textarea.textContent = "";
   function addToList(el) {

      if (el.target.tagName === "BUTTON" && el.target.className === "add-product") {
         // console.log(el.target.tagName)   !!!достъпваме елемента който слушаме по таг
         let product = el.target.parentElement.parentElement;
         let name = product.getElementsByClassName("product-title")[0].textContent;
         let price = Number(product.getElementsByClassName("product-line-price")[0].textContent);
         productInBag.add(name);
         totalPrice += price;
         textarea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      };
   };
   function addResult(element) {

      list = Array.from(productInBag).join(', ');
      textarea.textContent += `You bought ${list} for ${totalPrice.toFixed(2)}.`;
      
      document.getElementsByClassName("shopping-cart")[0].removeEventListener('click', addToList);
      document.getElementsByClassName("checkout")[0].removeEventListener('click', addResult);

   };
};




