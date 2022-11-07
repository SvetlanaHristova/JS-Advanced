window.addEventListener("load", solve);

function solve() {

  let [firstName, lastName, age] = document.querySelectorAll('input[name]');
  let dishDescription = document.querySelector('textarea[name]');
  let gender = document.getElementById("genderSelect").value
  let parentElement = document.querySelector('#in-progress');
  let submitButton = document.getElementById("form-btn");
  let clearButton = document.getElementById("clear-btn");

  submitButton.addEventListener('click', addInProgress);
  clearButton.addEventListener('click', clear);

  function addInProgress(event) {
    if (firstName.value !== "" && lastName.value !== "" &&
      age.value !== "" && dishDescription.value !== "") {
      event.preventDefault();
      document.getElementById("progress-count").textContent=Number(document.getElementById("progress-count").textContent)+1;
      let liElement = createEl('li', '', 'each-line');
      let articleElement = createEl('article');
      let h4Element = createEl('h4', `${firstName.value} ${lastName.value}`);
      let pElement = createEl('p', `${gender} ${age.value}`);
      let contentElement = createEl('p', dishDescription.value);
      let editButton = createEl('button', 'Edit', 'edit-btn');
      let completeButton = createEl('button', 'Mark as complete', 'complete-btn');
      articleElement.appendChild(h4Element);
      articleElement.appendChild(pElement);
      articleElement.appendChild(contentElement);
      liElement.appendChild(articleElement);
      liElement.appendChild(editButton);
      liElement.appendChild(completeButton);
      parentElement.appendChild(liElement);
      let arr = [firstName.value, lastName.value, age.value, dishDescription.value];
      //Array.from(document.querySelectorAll('input[name]')).map(x => x.value = "")
      //dishDescription.value = "";
      editButton.addEventListener('click', edit(arr));
      completeButton.addEventListener('click', complete);
    }
  }
  function edit(arr) {
    firstName.value = arr[0];
    lastName.value = arr[1];
    age.value = arr[2];
    dishDescription.value = arr[3];
  }
  function complete() {

  }

  function clear() {

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
