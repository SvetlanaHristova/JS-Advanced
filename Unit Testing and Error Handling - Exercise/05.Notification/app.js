function notify(message) {
  let text = document.getElementById("notification");
  text.textContent = message;
  text.style.display = 'block';
  
  text.addEventListener('click', () => {
    text.style.display = 'none';
  })
}
