function solve() {
   let addProducts = document.querySelectorAll("div.product-add");
   let checkoutElement = document.querySelector("button.checkout");

   for (let product of addProducts) {
      product.addEventListener('click', addToBag)
   }

   function addToBag(e) {
      let productName = e.target.cildren(2)
      let productPrice = Number(e.currentTarget.lastElementChild)
      let chopingList = document.querySelector("div textarea")
      let infoProduct = document.createElement("label")
      infoProduct.innerHTML = `Added ${productName} for ${productPrice} to the cart.\n`
      chopingList.appendChild(infoProduct)
   }

   debugger
   /*console.log(chopingList);
   let product =*/
}

