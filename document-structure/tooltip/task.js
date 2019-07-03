const items = document.querySelectorAll('.has-tooltip');

const tooltip = `<div class="tooltip">
tooltip text
</div>`;

// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.insertAdjacentHTML(tooltip);
//         tooltip.innerText = item.getAttribute('title');
//     });
// })

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', () => {
        items[i].insertAdjacentHTML(tooltip);
        tooltip.innerText = items[i].getAttribute('title');
    });
}