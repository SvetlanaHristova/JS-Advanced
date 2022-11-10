window.addEventListener("load", solve);

function solve() {
  let [titleElement, categoryElement] = document.querySelectorAll('input');
  let contentElement = document.getElementById("post-content");
  document.getElementById("publish-btn").addEventListener('click', publish);
  document.getElementById("clear-btn").addEventListener('click', clear);
  function publish(e) {
    e.preventDefault();
    let [title, category, content] = [titleElement.value, categoryElement.value, contentElement.value];

    if (title === "" || category === "" || content === "") {
      return;
    }

    titleElement.value = '';
    categoryElement.value = '';
    contentElement.value = '';

    let liElement = createEl("li", "", "rpost");
    let articleElement = createEl("article");
    let h4Element = createEl("h4", title);
    let pElement = createEl("p", `Category: ${category}`);
    let pContentElement = createEl("p", `Content: ${content}`);
    let editButton = createEl("button", "Edit", "action-btn edit");
    let approveButton = createEl("button", "Approve", "action-btn approve");

    articleElement.appendChild(h4Element);
    articleElement.appendChild(pElement);
    articleElement.appendChild(pContentElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editButton);
    liElement.appendChild(approveButton);
    document.getElementById("review-list").appendChild(liElement);

    editButton.addEventListener("click", edit);
    approveButton.addEventListener("click", approve);

  }

  function edit(e) {
    let parentElement = e.currentTarget.parentElement;
    titleElement.value = parentElement.firstChild.children[0].textContent;
    let textCategoy = parentElement.firstChild.children[1].textContent.replace('Category: ','');
    categoryElement.value = textCategoy;
    let textInfo = parentElement.firstChild.children[2].textContent.replace('Content: ','');
    contentElement.value = textInfo;
    parentElement.remove();
  }
  function approve(e) {
    let parentEl = e.currentTarget.parentElement;
    parentEl.children[2].remove();
    parentEl.children[1].remove();
    document.getElementById("published-list").appendChild(parentEl);
  }

  function clear() {
    Array.from(document.getElementById("published-list").children).map(x => x.remove());
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
