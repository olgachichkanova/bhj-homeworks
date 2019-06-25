const items = document.querySelectorAll('.rotator__case');

let i = 0;

setInterval(function() {
    items.forEach(function(item) {
        item.classList.remove('rotator__case_active');
    });
    items[i % items.length].classList.add('rotator__case_active');
    items[i % items.length].style.color = items[i % items.length].getAttribute('data-color');
    //works only with this line
    let color = items[i++ % items.length].getAttribute('data-color');
    
}, 1000);

