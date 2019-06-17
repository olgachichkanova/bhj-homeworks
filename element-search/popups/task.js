const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

let button = document.getElementsByClassName('show-success');

let close = document.getElementsByClassName('modal__close');
function active(elementName) {
    elementName.classList.add('modal_active');
}

function closed(elementName) {
    elementName.classList.remove('modal_active');
}

for(let i = 0; i < close.length; i++) {
    close[i].onclick = closed(close[i]);
}

button.onclick = active(success);

active(main); 



