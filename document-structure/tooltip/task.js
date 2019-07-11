const items = document.querySelectorAll('.has-tooltip');

function tooltipEl(itemText) {
    let template = document.createElement('div');
    template.classList.add('tooltip');
    template.innerText = itemText;
    return template.outerHTML;
};



for (let item of items) {
    
    item.addEventListener('click', (e) => {
        e.preventDefault();

        let tooltips = document.querySelectorAll('.tooltip');
        tooltips.forEach(tooltip => {
            tooltip.remove();
        });

        item.insertAdjacentHTML('afterend', tooltipEl(item.title));
        item.nextElementSibling.style.position = 'absolute';
        item.nextElementSibling.classList.toggle('tooltip_active');
        let left = item.getBoundingClientRect().left;
        item.nextElementSibling.style.left = `${left}px`;
    });
}

