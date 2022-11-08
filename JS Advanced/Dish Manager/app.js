window.addEventListener("load", solve);

function solve() {

  let submitButton = document.getElementById("form-btn");
  let clearButton = document.getElementById("clear-btn");
  let editButton = createEl('button', 'Edit', 'edit-btn');
  let completeButton = createEl('button', 'Mark as complete', 'complete-btn');
  let info = {};
  submitButton.addEventListener('click', addInProgress);
  clearButton.addEventListener('click', clear);
  editButton.addEventListener('click', edit);
  completeButton.addEventListener('click', complete);

  function addInProgress(event) {
    event.preventDefault();

    let [firstName, lastName, age] = document.querySelectorAll('input[name]');
    let dishDescription = document.querySelector('textarea[name]');
    let genderIndex = document.getElementById("genderSelect").options[document.getElementById("genderSelect").selectedIndex];
    info = {
      'firstName': firstName.value,
      'lastName': lastName.value,
      'age': age.value,
      'gender': genderIndex,
      'dishDescription': dishDescription.value
    }
    if (info.firstName === "" || info.lastName === "" ||
      info.age === "" || info.dishDescription === "") {
      return;
    }
    let parentElement = document.querySelector('#in-progress');
    let liElement = createEl('li', '', 'each-line');
    let articleElement = createEl('article');
    let h4Element = createEl('h4', `${firstName.value} ${lastName.value}`);
    let pElement = createEl('p', `${genderIndex.text}, ${age.value}`);
    let contentElement = createEl('p', `Dish description: ${dishDescription.value}`);

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pElement);
    articleElement.appendChild(contentElement);
    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(completeButton);
    parentElement.appendChild(liElement);

    document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) + 1;

    Array.from(document.querySelectorAll('input[name]')).map(x => x.value = "");
    document.querySelector('textarea[name]').value = "";
    document.getElementById("genderSelect").selectedIndex = 0;
  }

  function edit() {
    document.querySelectorAll('input[name]')[0].value = info.firstName;
    document.querySelectorAll('input[name]')[1].value = info.lastName;
    document.querySelectorAll('input[name]')[2].value = info.age;
    document.querySelector('textarea[name]').value = info.dishDescription;
    document.getElementById("genderSelect").options[document.getElementById("genderSelect").selectedIndex] = info.gender == 'Male' ?
      document.getElementById("genderSelect").options[0]
      : document.getElementById("genderSelect").options[1]
    document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) - 1;
    document.getElementsByClassName('each-line')[0].remove();
  }
  function complete() {
    document.querySelector('#finished').appendChild(document.getElementsByClassName('each-line')[0]);
    editButton.remove();
    completeButton.remove();
    document.getElementById("progress-count").textContent = Number(document.getElementById("progress-count").textContent) + 1;
  }

  function clear() {
    document.getElementsByClassName('each-line')[0].remove();
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








