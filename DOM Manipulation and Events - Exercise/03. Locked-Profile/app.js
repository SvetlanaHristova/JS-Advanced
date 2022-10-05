function lockedProfile() {
    let profils = document.querySelectorAll("div.profile");

    for (let profile of profils) {
        profile.getElementsByTagName("button")[0]
            .addEventListener('click', shown);
    }

    function shown(elements) {
        let currentProfil = elements.target.parentElement;
        if (currentProfil.querySelector('input[type = "radio"][value = "unlock"]').checked) {
            let hidenElement = currentProfil.querySelector("div");
            hidenElement.style.display = "block";
            currentProfil.lastElementChild.textContent = "Hide it";
        }
    }
}