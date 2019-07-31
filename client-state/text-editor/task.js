const editor = document.getElementById('editor');

editor.addEventListener('input', function() {
    localStorage.setItem('text', editor.value);
});

editor.value = localStorage.getItem('text');


