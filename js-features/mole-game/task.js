//to do: count click as win if hole_has-mole
let winCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');
let indexes = [];

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for(let i = 1; i < 10; i++) {
    indexes.push(i);
}
let holes = [];

indexes.forEach(function(index) {
    holes.push(getHole(index));
});

let active;

function checkHole(hole) {
    if (hole.className.includes( 'hole_has-mole' )) {
        active = true;
    } else {
        active = false;
    }
    return active;
}

holes.forEach(function(hole) {
    checkHole(hole);
})

if (active) {
    winCounter.textContent++;
} else {
    lostCounter++;
}

//to do: count click as lost if hole is empty
//to do: if has 10 moles alert 'You won!'
// if (winCounter = 10) {
//     alert('Победа!')
// }
//to do: if missed 5 times alert 'Oops! Try again!'
// if (lostCounter = 5) {
//     alert('Попробуйте еще раз!')
// }
//to do: clear the statistic after any alert


