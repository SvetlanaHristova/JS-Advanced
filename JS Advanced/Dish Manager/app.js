window.addEventListener("load", solve);

function solve() {

  let [firstName, lastName, age] = document.querySelectorAll('input[name]');
  let dishDescription = document.querySelector('textarea[name]');
  let gender = document.getElementById("genderSelect").value
  let parentElement = document.querySelector('#in-progress h3');
  let submitButton = document.getElementById("form-btn");
  let clearButton = document.getElementById("clear-btn");

  clearButton.addEventListener('click', clear);
  if (firstName.value !== "" && lastName.value !== "" &&
    age.value !== "" && dishDescription.value !== "") {
    submitButton.addEventListener('click', addInProgress);
  }
  function addInProgress(event) {
    // event.preventDefault();
    let liElement = createEl('li', '', 'each-line');
    let articleElement = createEl('article');
    let h4Element = createEl('h4', `${firstName.value} ${lastName.value}`);
    let pElement = createEl('p', `${gender} ${age.value}`);
    let contentElement = createEl('p', dishDescription.value);
    articleElement.appendChild(h4Element);
    articleElement.appendChild(pElement);
    articleElement.appendChild(contentElement);
    liElement.appendChild(articleElement);
    parentElement.appendChild(liElement);

    //console.log(gender)
  }
  function clear() {

  }

  function createEl(type, content, classContent) {
    let element = document.createElement(type);
    if (content) {
      element.textContent = content;
    }
    if (classContent) {
      element.classList.add('class' = classContent);
      
    }
    return element;

  }

}
