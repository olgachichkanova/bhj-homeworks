let start = function() {
    let timer = document.getElementById('timer');
    if (timer.textContent > 0) {
        timer.textContent--;
        if (timer.textContent <= 9) {
            timer.innerHTML = '0'+ timer.textContent;
        } 
    } else {
        alert('Вы победили в конкурсе!');
    }
}

setInterval(start, 1000);

// let start = function() {
//     let ss = document.getElementById('ss');
//     let mm = document.getElementById('mm');
//     let hh = document.getElementById('hh');

//     if (ss.textContent > 0) {
//         ss.textContent--;
//         if (ss.textContent <= 9) {
//             ss.innerHTML = '0'+ ss.textContent;
//         } 
//     } else if  (ss.textContent = 0) {
//         if (mm.textContent > 0) {
//             mm.textContent--;
//             ss.textContent = 59;
//         }
//     }
    
//     else if ((ss.textContent = 0) && (mm.textContent = 0) && (hh.textContent = 0)) {
//         alert('Вы победили в конкурсе!');
//     }
// }

// setInterval(start, 1000);





