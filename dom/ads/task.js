const items = document.querySelectorAll('.rotator__case');

let i = 0;

setInterval(function() {
    items.forEach(function(item) {
        item.classList.remove('rotator__case_active');
    });
    
    i+=1;
    let j = items[i % items.length];
    
    j.classList.add('rotator__case_active');
    j.style.color = j.getAttribute('data-color');
}, 1000);

