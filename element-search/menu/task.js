const links = document.querySelectorAll('a.menu__link');

function showMenu(elementName) {
    elementName.classList.add('menu_active');
}

links.forEach(function (link) {
    link.onclick = function() {
        showMenu(this.nextElementSibling);
        return false;
    }
});
