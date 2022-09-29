function solve() {
  let inputText = document.getElementById("input").value;

  let arr = inputText.split('.')
    .filter(x => x.length != 0)
    .map(x => x += ".");

  while (arr.length) {
    let paragraf = arr.splice(0, 3).join(' ');
    let element = document.createElement('p');
    element.textContent = paragraf;
    document.getElementById("output").appendChild(element);
  }
    //каксе добавя елемент в HTML дървото;
}