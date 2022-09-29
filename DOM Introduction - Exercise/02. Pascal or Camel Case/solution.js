function solve() {
  let inputText = document.getElementById("text").value;
  let type = document.getElementById("naming-convention").value;
  inputText = inputText.toLowerCase();
  let textArr = inputText.split(' ');
  let result = "";
  switch (type) {
    case "Camel Case":
      textArr.forEach((element, index) => {
        return index === 0
          ? result += element
          : result += element.replace(element[0], element[0].toUpperCase());
      }); break;
    case "Pascal Case":
      textArr.forEach((element) => {
        return result += element.replace(element[0], element[0].toUpperCase());
      }); break;
    default: result = "Error!";
      break;
  };
  document.getElementById("result").textContent = result;
}