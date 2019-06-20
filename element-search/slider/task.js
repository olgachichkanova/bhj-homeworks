const prev = document.querySelector('div.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow_next');
const items = [...document.querySelectorAll('div.slider__item')];

let i = 0;

function active(elementName) {
    elementName.classList.add('slider__item_active');
}

prev.onclick = function() {
    if(i == 0) {
        i = items.length;
    }
    i--;
    items.forEach(function(item) {
        item.classList.remove('slider__item_active');
    });
    active(items[i]);
}

next.onclick = function() {
    if (i == items.length - 1) {
        i = -1;
    }
    i++;
    items.forEach(function(item) {
        item.classList.remove('slider__item_active');
    });
    active(items[i]);
}
