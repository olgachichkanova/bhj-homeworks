const value = document.querySelectorAll('.product__quantity-value');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const add = document.querySelectorAll('.product__add');

const cart = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const img = document.querySelectorAll('img');

let item = `<div class="cart__product" data-id="1">
<img class="cart__product-image" src="image.png">
<div class="cart__product-count">20</div>
</div>`;

//decrease quantity
for (let i = 0; i < dec.length; i++) {
    dec[i].onclick = function() {
        if (value[i].innerText > 1) {
            value[i].innerText--;
        }
    }
}

// increase quantity
for (let i = 0; i < inc.length; i++) {
    inc[i].onclick = function() {
        value[i].innerText++;
    }
}

for (let i = 0; i < add.length; i++) {
    let items = [];
    add[i].addEventListener('click', () => {
    
        if (items.length == 0) {
            cart.insertAdjacentHTML("afterbegin", item);
            items.push(item);

            const cartProduct = document.querySelector('.cart__product');
            cartProduct.setAttribute('data-id', product[i].getAttribute('data-id'));

            const cartImg = document.querySelector('img');
            cartImg.setAttribute('src', img[i].getAttribute('src'));

            const cartQuantity = document.querySelector('.cart__product-count');
            cartQuantity.innerText = value[i].innerText;

            console.log(items);

        } else {
            if (product[i].getAttribute('data-id') == cartProduct.getAttribute('data-id')) {
                console.log('test');
            }
        };
        
    });

    
}

