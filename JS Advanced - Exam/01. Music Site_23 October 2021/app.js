window.addEventListener('load', solve);

function solve() {
    let [genre, name, author, date] = document.querySelectorAll('input');
    document.getElementById("add-btn").addEventListener('click', func1);
    function func1(e) {
        e.preventDefault();
        if (genre.value === "" || name.value === "" ||
            author.value === "" || date.value === "") {
            return;
        }
        let parent = document.querySelector('#all-hits div.all-hits-container');
        let div = createEl('div', '', 'hits-info');
        let img = createEl('img');
        img.setAttribute('src', './static/img/img.png');
        div.appendChild(img);
        div.appendChild(createEl('h2', `Genre: ${genre.value}`));
        div.appendChild(createEl('h2', `Name: ${name.value}`));
        div.appendChild(createEl('h2', `Author: ${author.value}`));
        div.appendChild(createEl('h3', `Date: ${date.value}`));
        let saveButton = createEl('button', 'Save song', 'save-btn');
        let likeButton = createEl('button', 'Like song', 'like-btn');
        let deleteButton = createEl('button', 'Delete', 'delete-btn');
        div.appendChild(saveButton);
        div.appendChild(likeButton);
        div.appendChild(deleteButton);
        parent.appendChild(div);

        Array.from(document.querySelectorAll('input')).map(x => x.value = "");

        saveButton.addEventListener('click', saveFunc);
        likeButton.addEventListener('click', likeFunc);
        deleteButton.addEventListener('click', deleteFunc);
    }
    function likeFunc(e) {
        e.currentTarget.disabled = true;
        let likesElement = document.querySelector("#total-likes div p");
        let likes = Number(likesElement.textContent.replace('Total Likes: ', "")) + 1;
        likesElement.textContent = `Total Likes: ${likes}`;
    }
    function saveFunc(e) {
        document.getElementsByClassName("saved-container")[0].appendChild(e.currentTarget.parentElement);
        e.currentTarget.nextSibling.remove();
        e.currentTarget.remove();
    }
    function deleteFunc(e) {
        e.currentTarget.parentElement.remove();
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

