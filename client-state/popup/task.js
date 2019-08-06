const popup = document.querySelector('.modal');
const button = document.querySelector('.modal__close');

button.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'modal=true';
});

const checkCookie = () => {
    if (document.cookie.indexOf() < 0) {
        popup.classList.add('modal_active');
    } ;
};

document.onload = checkCookie();


