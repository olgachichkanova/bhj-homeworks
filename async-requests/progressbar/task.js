const progressBar = document.getElementById('progress');
const form = document.forms.form;
let formData = new FormData(form);


function eventHandler(event) {
    let loaded = event.loaded;
    let total = event.total;
    progressBar.setAttribute('value', loaded/total);
    return false;
};

function addListeners (xhr, event) {
    xhr.addEventListener('loadstart', eventHandler(event));
    xhr.addEventListener('load', eventHandler(event));
    xhr.addEventListener('loadend', eventHandler(event));
    xhr.addEventListener('progress', eventHandler(event));
    xhr.addEventListener('error', eventHandler(event));
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


