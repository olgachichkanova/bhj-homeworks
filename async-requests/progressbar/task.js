const progressBar = document.getElementById('progress');
const form = document.forms.form;

function upload(file) {
    let request = new XMLHttpRequest();

    request.upload.onprogress = function(event) {
        let loaded = event.loaded;
        let total = event.total;

        progressBar.setAttribute('value', loaded/total);
        
        return false;
    };

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    request.send(file);

}


form.addEventListener('submit', (e) => {

    e.preventDefault();
    let input = form.elements.file;
    let file = input.files[0];
    

    if (file) {
        upload(file);
    };
    
});




