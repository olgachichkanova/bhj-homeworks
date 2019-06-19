const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');
const button = document.querySelector('a.show-success');
let closeButtons = document.querySelectorAll('div.modal__close');
function active(elementName) {
    elementName.classList.add('modal_active');
}

function closed(elementName) {
    elementName.classList.remove('modal_active');
}

active(main); 
button.onclick = function(){
    active(success);
    closed(main);
};

closeButtons.forEach(function(closeButton) {
    closeButton.onclick = function() {
        closed(this.parentElement.parentElement);
    }
})



