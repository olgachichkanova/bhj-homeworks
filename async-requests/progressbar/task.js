const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    let input = this.form;
    let file = input.form;
    // let formData = new FormData();
    // formData.append('file', file);

    if (file) {
        upload(file);
    };
    return false;
    
});


function upload(file) {
    let request = new XMLHttpRequest();

    request.upload.onprogress = function(event) {
        console.log(event.loaded);
    };

    request.onload = request.onerror = function() {
        if (this.status == 200) {
                console.log('success');
            } else {
                console.log('error ' + this.status);
            }    
        };

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
    request.send(file);

}

