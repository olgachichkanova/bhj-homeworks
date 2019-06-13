const image = document.getElementById('cookie');
let counter = document.getElementById('clicker__counter');
let click = 0;
let i = 0;

function plus() {
    image.width+=10;
    image.height+=10;
    i++;
    click++;
    counter.innerHTML = click;
}

function minus() {
    image.width-=10;
    image.height-=10;
    i--;
    click++;
    counter.innerHTML = click;
}

function size() {
    switch(i) {
        case 0:
            plus();
            break;
        case 1:
            minus();
            break;
    }
}

image.onclick = size;

