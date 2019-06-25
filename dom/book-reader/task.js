const sizes = document.querySelectorAll('.font-size');
const book = document.getElementById('book');

sizes.forEach(function(size) {
    size.addEventListener('click', function(item) {
        item.preventDefault();
        sizes.forEach(function(size) {
            size.classList.remove('font-size_active');
        });
        
        size.classList.add('font-size_active');
        if ((size.classList.contains('font-size_active')) && (size.classList.contains('font-size_small'))) {
            book.classList.add('book_fs-small');
        } else if ((size.classList.contains('font-size_active')) && (size.classList.contains('font-size_big'))) {
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        }
        return false;
    }, false);
})