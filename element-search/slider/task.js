const prev = document.querySelector('div.slider__arrow_prev');
const next = document.querySelector('div.slider__arrow_next');
const items = [...document.querySelectorAll('div.slider__item')];

let sliderIndex = 0;

prev.onclick = function() {
    sliderIndex--;
}

next.onclick = function() {
    sliderIndex++;
}

function active(elementName) {
    elementName.classList.add('slider__item_active');
}

for(let i = 0; i < items.length; i++) {
    active(items[i]);
}
