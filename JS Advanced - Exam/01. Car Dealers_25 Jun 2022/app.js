window.addEventListener("load", solve);

function solve() {
  let [makeElement, modelElement, yearElement, originalCostElement, sellingPriceElement] = document.querySelectorAll('input');
  let fuelElement = document.getElementById('fuel');

  let publishButon = document.getElementById("publish");
  publishButon.addEventListener('click', publish);
  //document.getElementsByClassName('action-btn edit').forEach(x=>x.addEventListener('click', edit));

  function publish(e) {
    e.preventDefault();

    if (makeElement.value === "" || modelElement.value === "" || yearElement.value === "" ||
      Number(originalCostElement.value) > Number(sellingPriceElement.value) || originalCostElement.value === "" ||
      sellingPriceElement.value === "" || fuelElement.value === "") {
      return;
    }

    let trElement = createEl('tr', '', 'row');
    let tdElement = createEl('td', '');
    let editButton = createEl('button', 'Edit', 'action-btn edit');
    let sellButton = createEl('button', 'Seel', 'action-btn sell');
    trElement.appendChild(createEl('td', makeElement.value));
    trElement.appendChild(createEl('td', modelElement.value));
    trElement.appendChild(createEl('td', yearElement.value));
    trElement.appendChild(createEl('td', fuelElement.options[fuelElement.selectedIndex].value));
    trElement.appendChild(createEl('td', originalCostElement.value));
    trElement.appendChild(createEl('td', sellingPriceElement.value));
    tdElement.appendChild(editButton);
    tdElement.appendChild(sellButton);
    trElement.appendChild(tdElement);

    document.getElementById('table-body').appendChild(trElement);
    Array.from(document.querySelectorAll('input')).map(x => x.value = '');
    //let optionsElement = createEl('option');
    //optionsElement.value = ""
    //document.getElementById('fuel').prepend(optionsElement);
    //document.getElementById('fuel').selectedIndex = 0;
    editButton.addEventListener('click', edit);
    sellButton.addEventListener('click', sell);
  }

  function edit(e) {
    let parentEl = e.currentTarget.parentElement.parentElement;
    makeElement.value = parentEl.children[0].textContent;
    modelElement.value = parentEl.children[1].textContent;
    yearElement.value = parentEl.children[2].textContent;
    originalCostElement.value = parentEl.children[4].textContent;
    sellingPriceElement.value = parentEl.children[5].textContent;
    //let index=
    fuelElement.options[fuelElement.selectedIndex].value = parentEl.children[3].textContent;
    //document.getElementById('fuel').selectedIndex = info.fuelIndex + 1;
    document.getElementsByClassName('row')[0].remove();
  }
  function sell(e) {
    let parent = e.currentTarget.parentElement.parentElement;
    let make = parent.children[0].textContent;
    let model = parent.children[1].textContent;
    let year = parent.children[2].textContent;
    let selling = parent.children[5].textContent;
    let original = parent.children[4].textContent;
    let diff = selling - original
    let parentElement = document.getElementById('cars-list');
    let liElement = createEl('li', '', 'each-list');
    liElement.appendChild(createEl('span', `${make} ${model}`));
    liElement.appendChild(createEl('span', `${year}`));
    liElement.appendChild(createEl('span', `${diff.toFixed(2)}`));
    parentElement.appendChild(liElement);
    document.getElementsByClassName('row')[0].remove();
    document.getElementById('profit').textContent = (Number(document.getElementById('profit').textContent) + diff).toFixed(2);
    //let removeEl = document.getElementById('fuel').firstChild;
    //removeEl.remove();
    //document.getElementById('fuel').selectedIndex = 0;
  }
  function createEl(type, content, classContent) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    if (classContent) {
      element.className = classContent;
    }
    return element;
  }
} 
