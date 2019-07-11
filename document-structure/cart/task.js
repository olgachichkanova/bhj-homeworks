const value = document.querySelectorAll('.product__quantity-value');
const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');
const add = document.querySelectorAll('.product__add');

const cart = document.querySelector('.cart__products');
const product = document.querySelectorAll('.product');
const img = document.querySelectorAll('img');

const item = (itemId, itemImg, itemCount) => {
    const cartProduct = document.createElement('div');
    cartProduct.classList = 'cart__product';
    cartProduct.setAttribute('data-id', itemId);

    const cartImage = document.createElement('img');
    cartImage.classList = 'cart__product-image';
    cartImage.setAttribute('src', itemImg);

    const productCount = document.createElement('div');
    productCount.classList = 'cart__product-count';
    productCount.innerText = itemCount;

    cartProduct.appendChild(cartImage);
    cartProduct.appendChild(productCount);


    return cartProduct.outerHTML;
}

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

    add[i].addEventListener('click', () => {

        const itemId = product[i].getAttribute('data-id');
        const itemImg = img[i].getAttribute('src');
        const itemCount = value[i].innerText;

        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
       
        if (!(cartProduct.some(item => itemId === item.dataset.id))) {
            cart.insertAdjacentHTML("afterbegin", item(itemId, itemImg, itemCount));
        } else {
            let cartItem = cartProduct.filter(item => itemId === item.dataset.id);
            cartItem[0].querySelector('.cart__product-count').innerText = Number(cartItem[0].querySelector('.cart__product-count').innerText) + Number(itemCount);
        } 
    });
}
