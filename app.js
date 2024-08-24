document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
  });

const input = document.querySelector('.container-input');
const but = document.querySelector('button');
const img = document.querySelector('#qr-img');

but.onclick = () => {
    if (input.value == 0) {
        console.log('ошибка (поле ввода пустое)')
    } else {
        img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + input.value;
        img.classList.add('active');
    }
}
