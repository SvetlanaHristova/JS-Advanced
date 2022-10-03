function solve() {
   document.getElementsByClassName("shopping-cart")[0].addEventListener('click', addToList);


   function addToList(el) {
      if (el.target.tagName === "BUTTON" && el.target.className === "add-product") {
         let product = el.target.parentElement.parentElement;
         let name=product.getElementsByClassName("product-title")[0].textContent;
         let price=Number(product.getElementsByClassName("product-line-price")[0].textContent);

         console.log(price)
      }
      // console.log(el.target.tagName)       !!!

   }
}

/*let addProducts = document.querySelectorAll("div.product-add");
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
   }*/
/* let priceProduct=product.lastElementChild*//*let productsPropertyElements = document.querySelectorAll("div.product");
   let mapProducts = new Map()
   for (let product of productsPropertyElements) {
     let productName=product.children[1].children[0].textContent;
     let productPrice=productName.cildren[3]
     let 
      console.log(productName);
   }

   debugger

   /*let product =*/
