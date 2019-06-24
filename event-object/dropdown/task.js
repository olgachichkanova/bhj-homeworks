const dropdown = document.querySelector('ul.dropdown__list');
const list = document.querySelector('div.dropdown__value');
const dropdownItems = [...document.querySelectorAll('a.dropdown__link')];

list.addEventListener('click', function() {
    dropdown.classList.toggle('dropdown__list_active')
    if (dropdown.classList.contains('dropdown__list_active')) {
        for (let i = 0; i < dropdownItems.length; i++) {
            dropdownItems[i].addEventListener('click', function() {
                console.log('test');
                list.textContent = this.textContent;
                return false;
            }, false);   
        }
    };
}, false);
    