const container = document.getElementById('container');
const overlayCon = document.getElementById('overlayCon');
const overlayBtn = document.getElementById('overlayBtn');

overlayBtn.addEventListener('click', () => {
  container.classList.toggle('right-panel-active');
  
  overlayBtn.classList.remove('btnScaled');
  window.requestAnimationFrame(() => {
    overlayBtn.classList.add('btnScaled');
  });
});
document.querySelector('form').addEventListener('submit', (e) => {
    const email = document.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        e.preventDefault();
        alert('Введите корректный email!');
    }
});