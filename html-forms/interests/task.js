const items = [...document.querySelectorAll('.interest__check')];
const lists = [...document.querySelectorAll('.interests_active')];
const interestList = [...document.querySelectorAll('.interest')];
console.log(items);
console.log(lists);
console.log(interestList);
for(let i in interestList) {
    // console.log(interestList[i]);
    
    interestList[i].addEventListener('change', () => {
        if (interestList[i].checked) {
            items.forEach((item) => {
                item.checked = true;
            });
        } else {
            items.forEach((item) => {
                item.checked = false;
            });
        };
    });
}

// let main = [];
// let mainInterests = [];

//trying to get input element
// lists.forEach((list) => {
//     main.push(list.parentElement);
// });

// main.forEach((item) => {
//     mainInterests.push(item.querySelector('input'));
// });

// // trying to set up the event
// mainInterests.forEach((i) => {
//     i.addEventListener('change', () => {
//         if (i.checked) {
//             items.forEach((item) => {
//                 item.checked = true;
//             });
//         } else {
//             items.forEach((item) => {
//                 item.checked = false;
//             });
//         };
//     });
// });