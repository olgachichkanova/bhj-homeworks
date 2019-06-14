const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

const close = document.getElementsByClassName('modal__close');
function active(elementName) {
    elementName.classList.add('modal_active');
}

function closed(elementName) {
    elementName.classList.remove('modal_active');
}

Array.prototype.forEach.call(close, function(element) {
    element.onclick = element.classList.remove('modal__active');
})

active(main);
// main.classList.add('modal_active');


