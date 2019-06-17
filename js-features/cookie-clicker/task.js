const image = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let i = 0;

function plus() {
    image.width+=10;
    image.height+=10;
    i++;
    counter.innerHTML = i;
}

function minus() {
    image.width-=10;
    image.height-=10;
    i++;
    counter.innerHTML = i;
}

function size() {
    if (i % 2 == 0) {
        plus();
    } else {
        minus();
    }
}

image.onclick = size;

