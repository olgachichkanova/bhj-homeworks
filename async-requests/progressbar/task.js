const progressBar = document.getElementById('progress');
const form = document.forms.form;
let formData = new FormData(form);


function eventHandler(event) {
    progressBar.value += event.loaded / 10000000000;
};

function addListeners (xhr) {
    xhr.addEventListener('loadstart', eventHandler);
    xhr.addEventListener('load', eventHandler);
    xhr.addEventListener('loadend', eventHandler);
    xhr.addEventListener('progress', eventHandler);
    xhr.addEventListener('error', eventHandler);
};

function upload(formData) {
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    addListeners(request, event);
    request.send(formData);
}


form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let input = form.elements.file;
    let file = input.files[0];
    formData.append('file', file);

    if (formData) {
        upload(formData);
    };

    return false;
});


