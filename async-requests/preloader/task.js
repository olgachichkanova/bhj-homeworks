const items = document.getElementById('items');
const item = items.lastElementChild;


// const itemCode = document.createElement('div');
// itemCode.className = 'item__code';

// const itemValue = document.createElement('div');
// itemValue.className = 'item__value';

// const itemCurrency = document.createElement('div');
// itemCurrency.className = 'item__code';

// item.appendChild(itemCode);
// item.appendChild(itemValue);
// item.appendChild(itemCurrency);

// console.log(item);


let request = new XMLHttpRequest();
request.open("GET", "https://netology-slow-rest.herokuapp.com");
request.send();

console.log(request.readyState);

