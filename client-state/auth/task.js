const login = document.getElementById('signin');
const loginForm = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');

login.classList.add('signin_active');

let storageData = localStorage.getItem('id');

function checkLocalStorage () {
    if(storageData !== null) {
        welcome.classList.add('welcome_active');
        login.classList.remove('signin_active');
        user.innerText = localStorage.getItem('id');
    } else {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let formData = new FormData(loginForm);

            let request = new XMLHttpRequest();
            request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
            request.addEventListener('readystatechange', () => {
                if(request.readyState == request.DONE && request.status == 200) {
                    foo(JSON.parse(request.responseText));
        }
    })
    request.send(formData);
    
});
    }
}

function foo (data) {
    if (data.success == true) {
        localStorage.setItem('id', data.user_id);

        welcome.classList.add('welcome_active');
        login.classList.remove('signin_active');
        user.innerText = localStorage.getItem('id');
    } else {
        alert('Неверный логин\пароль');
    }
    
};

document.onload = checkLocalStorage();

