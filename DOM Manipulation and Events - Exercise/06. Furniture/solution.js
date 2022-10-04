function solve() {
  document.querySelectorAll("button")[0].addEventListener("click", addProduct);
  document.querySelectorAll("button")[1].addEventListener("click", bayProducts);

  function addProduct() {
    let inputText = document.querySelectorAll("#exercise textarea")[0].value;
    let productObjects = JSON.parse(inputText);
    let parentElement = document.querySelectorAll(".table tbody")[0];

    for (let obj of productObjects) {
      let trElement = document.createElement('tr');

      let tdElement1 = document.createElement('td');
      let imgElement = document.createElement("img");
      imgElement.setAttribute("src", obj.img);
      tdElement1.appendChild(imgElement);
      trElement.appendChild(tdElement1);

      let tdElement2 = document.createElement('td');
      let nameElement = document.createElement("p");
      nameElement.textContent = obj.name;
      tdElement2.appendChild(nameElement);
      trElement.appendChild(tdElement2);

      let tdElement3 = document.createElement('td');
      let priceElement = document.createElement("p");
      priceElement.textContent = obj.price;
      tdElement3.appendChild(priceElement);
      trElement.appendChild(tdElement3);

      let tdElement4 = document.createElement('td');
      let dFElement = document.createElement("p");
      dFElement.textContent = obj.decFactor;
      tdElement4.appendChild(dFElement);
      trElement.appendChild(tdElement4);

      let lastElement = document.createElement('td');
      let checkElement = document.createElement("input");
      checkElement.type = "checkbox";
      lastElement.appendChild(checkElement);
      trElement.appendChild(lastElement);

      parentElement.appendChild(trElement);
    };

  };

  function bayProducts() {
    let elements = Array.from(document.querySelectorAll("input")).filter(x => x.checked);
    let result = [];
    let totalPrice = 0;
    let sumDecorationFaktor = 0;

    for (let el of elements) {
      let productElement = el.parentElement.parentElement.querySelectorAll('p');
      result.push(productElement[0].textContent);
      totalPrice += Number(productElement[1].textContent);
      sumDecorationFaktor += Number(productElement[2].textContent);

    }
    let output = document.querySelectorAll("textarea")[1];
    output.textContent += `Bought furniture: ${result.join(", ")}\n`;
    output.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.textContent += `Average decoration factor: ${(sumDecorationFaktor / result.length)}`;

  };
};