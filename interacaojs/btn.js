const button = document.getElementById('moving-button');
let intervalId;

function moveButton() {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  button.style.left = x + 'px';
  button.style.top = y + 'px';
}

button.addEventListener('mouseenter', function () {
  button.style.pointerEvents = 'none';
  intervalId = setInterval(moveButton, 10);
});

button.addEventListener('mouseleave', function () {
  button.style.pointerEvents = 'auto';
  clearInterval(intervalId);
});

button.addEventListener('click', function () {
  button.style.pointerEvents = 'none';
  intervalId = setInterval(moveButton, 10);
  setTimeout(function () {
    button.style.pointerEvents = 'auto';
    clearInterval(intervalId);
  }, 10); // O botão se moverá por 1 segundo após o clique
});