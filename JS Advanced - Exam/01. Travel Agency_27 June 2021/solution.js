window.addEventListener('load', solution);

function solution() {
  console.log('TODO: Write the missing functionality!');
  let [fname, email, phone, address, code, submitBTN, editBTN, continueBTN] = document.querySelectorAll('input');
  let arrInput = Array.from(document.querySelectorAll('input')).slice(0, 5);
  submitBTN.addEventListener('click', submitFunc);
  editBTN.addEventListener('click', editFunc);
  continueBTN.addEventListener('click', continueFunc);

  function submitFunc() {
    if (fname.value === "" || email.value === "") {
      return;
    }
    parentElement = document.getElementById('infoPreview');
    parentElement.appendChild(createEl('li', `Full Name: ${fname.value}`));
    parentElement.appendChild(createEl('li', `Email: ${email.value}`));
    parentElement.appendChild(createEl('li', `Phone Number: ${phone.value}`));
    parentElement.appendChild(createEl('li', `Address: ${address.value}`));
    parentElement.appendChild(createEl('li', `Postal Code: ${code.value}`));
    editBTN.disabled = false;
    continueBTN.disabled = false;
    submitBTN.disabled = true;
    arrInput.map(x => x.value = "");
  }
  function editFunc() {
    editBTN.disabled = true;
    continueBTN.disabled = true;
    submitBTN.disabled = false;

    for (let i = 0; i < 5; i++) {
      let content = document.querySelectorAll('li')[i].textContent.split(': ');
      content.shift();
      arrInput[i].value = content.join(': ');
    }
    Array.from(document.querySelectorAll('li')).map(x => x.remove());
  }

  function continueFunc() {
    document.getElementById("block").innerHTML = "";
    document.getElementById("block").appendChild(createEl('h3', "Thank you for your reservation!"));
    //let divEl = document.getElementById("block");
    //Array.from(divEl.children).map(x => x.remove());
    //divEl.appendChild(createEl('h3', "Thank you for your reservation!"));
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
