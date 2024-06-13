let counter = localStorage.cartItem != undefined ? JSON.parse(localStorage.cartItem).length : 0;
document.querySelector('.cart__counter').textContent = counter;
