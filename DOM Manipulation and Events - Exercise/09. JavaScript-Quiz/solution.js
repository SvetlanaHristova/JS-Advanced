function solve() {
  let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
  let counterRight = 0;
  let index = 0;
  let section = document.querySelectorAll('section');

  Array.from(document.getElementsByClassName("answer-text")).map((x) => x.addEventListener('click', answer));

  function answer(event) {
    if (rightAnswers.includes(event.target.textContent)) {
      counterRight++;
    }
    // let section = event.target.parentElement.parentElement.parentElement.parentElement //това работи,но няма индекси
    section[index].style.display = "none";

    if (index < section.length - 1) {
      section[index + 1].style.display = "block";
    } else {
      document.querySelector("#results").style.display = "block"
      counterRight === section.length ?
        document.querySelector('.results-inner h1').textContent = "You are recognized as top JavaScript fan!"
        : document.querySelector('.results-inner h1').textContent = `You have ${counterRight} right answers`
    }
    index++;
  }

}
