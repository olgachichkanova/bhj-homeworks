const popup = document.querySelector('.modal');
const button = document.querySelector('.modal__close');

document.cookie = "user=Olga;";

console.log(document.cookie);


const getCookie = (name) => {
    const value = ";" + document.cookie;
    
    let elements = value.split(";" + name + "=");
    
    if (elements.length === 2) {
        return elements
            .pop()
            .split(";")
            .shift();
    }
}
// console.log(getCookie('user'));

// console.log(document.cookie);

const checkCookie = () => {
    let userName = getCookie('user');
    console.log(userName);
    if (userName == '') {
        popup.classList.add('modal_active');
        button.addEventListener('click', () => {
        popup.classList.remove('modal_active');
        });
        document.cookie = 'user=username';
    } 
}

// document.onload = checkCookie();


