const elements = [...document.querySelectorAll('.reveal')];

window.onscroll = function() {
    let viewportHeight = window.innerHeight;
console.log(viewportHeight)
elements.forEach(function(element) {
    let elementTop = element.getBoundingClientRect().top;
    console.log(elementTop);
    let elementBottom = element.getBoundingClientRect().bottom;
    console.log(elementBottom);
    let check = ((elementTop < viewportHeight) && (elementBottom < viewportHeight))? true : false;

    if (check) {
        element.classList.add('reveal_active');
    } else {
        element.classList.remove('reveal_active');
    };
})
}
