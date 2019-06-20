const links = document.querySelectorAll('a.menu__link');

const menu = document.querySelectorAll('ul.menu_sub');

function showMenu(elementName) {
    elementName.classList.add('menu_active');
}

links.forEach(function (link) {
    link.onclick = function() {
//remove class menu_active to close all other sub menu on click
        menu.forEach(function(item) {
            item.classList.remove('menu_active');
        });
        showMenu(this.nextElementSibling);
        return false;
    }
});
