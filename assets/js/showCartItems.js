let cartItems = localStorage.cartItem != undefined ? JSON.parse(localStorage.cartItem) : [];


showCartItems();
function showCartItems(){
    let cartWrapper = document.querySelector('#cart-table tbody');
    document.querySelector('.cart__counter').textContent = localStorage.cartItem != undefined ? JSON.parse(localStorage.cartItem).length : 0;;
    cartWrapper.innerHTML = cartItems.map(item => {
        return `
            <tr>
                          <td class="flexitem">
                            <div class="thumbnail object-cover">
                              <a href="#"><img src="${item.img}" alt=""></a>
                            </div>
                            <div class="content">
                              <strong><a href="#">${item.name}</a></strong>
                            </div>
                          </td>
                          <td>$${(item.price - item.price * item.discount / 100).toFixed(2)}</td>
                          <td>
                            <div class="qty-control">
                              <button type="button" class="minus">-</button>
                                <span clas="quantity">${item.quantity}</span>
                              <button type="button" class="plus">+</button>
                            </div>
                          </td>
                          <td>$${((item.price - item.price * item.discount / 100) * item.quantity ).toFixed(2)}</td>
                          <td><button type="button" class="item-remove" data-prodname="${item.name}">
                          <i class="ri-close-line"></i>
                          </button></td>
                        </tr>
        `
    }).join('')
    setDeleteBtnHandler();
    incDecCartItem();
    sumOrder()
};


function setDeleteBtnHandler(){
    let btns = document.querySelectorAll('.item-remove');
    btns.forEach(btn => {
      btn.onclick = () => {
        let allItems = JSON.parse(localStorage.cartItem);

        cartItems = allItems.filter(item => {
          if(item.name != btn.dataset.prodname) return item;
        })
        localStorage.setItem('cartItem', JSON.stringify(cartItems));
        showCartItems();

      }
    })
}

function incDecCartItem(){
  let minusBtns = document.querySelectorAll('.minus');
  let plusBtns = document.querySelectorAll('.plus');
  minusBtns.forEach((btn, ind) => {
    btn.onclick = () => {
      if(cartItems[ind].quantity > 1) {
        cartItems[ind].quantity = --cartItems[ind].quantity; 
        console.log(cartItems);
        localStorage.setItem('cartItem', JSON.stringify(cartItems));
        showCartItems();

      }
    }
  })

  plusBtns.forEach((btn, ind) => {
    btn.onclick = () => {
        cartItems[ind].quantity = ++cartItems[ind].quantity; 
        console.log(cartItems);
        localStorage.setItem('cartItem', JSON.stringify(cartItems));
        showCartItems();

    }
  })
}



function sumOrder(){
  let sumDisplay = document.querySelector('.sum');
  let totalPriceDisplay = document.querySelector('.total__price');

  let sum = 0;

  cartItems.forEach(item => {
    sum += (item.price - ((item.price * item.discount) / 100).toFixed(2)) * item.quantity ;
  })
  sumDisplay.innerHTML = `$${(sum).toFixed(2)}`; 
  totalPriceDisplay.innerHTML = `$${(sum+ 10).toFixed(2)}`

}


