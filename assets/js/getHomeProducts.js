let localAllData = JSON.parse(localStorage.allItems);
let cartItems = localStorage.cartItem != undefined ? JSON.parse(localStorage.cartItem) : [];

addToCartHandler();
function addToCartHandler(){
    let btns = document.querySelectorAll('.add__cart__btn');
    btns.forEach(btn => {
        btn.onclick = () => {
            console.log(btn.dataset.prodname);
            localAllData.some(item => {
                Object.values(item).some(elem => {
                    elem.some(el => {
                      if(el.name == btn.dataset.prodname) {
                        let double = false;
                        let selectProd = {
                          ...el,
                          quantity: 1
                        }
                        double = cartItems.some(items => {
                          if(items.name == btn.dataset.prodname){
                            items.quantity += 1;
                            return true;
                          } 
                        })
                        !double && cartItems.push(selectProd);
                      }
                    })
                })
            })
            console.log(cartItems);
            localStorage.setItem('cartItem', JSON.stringify(cartItems));
            document.querySelector('.cart__counter').textContent = JSON.parse(localStorage.cartItem).length;
        }
    })
}
if(localAllData.length) {
    setTrendingProducts();
    setFeaturedProducts();
    addToCartHandler();
}

function setTrendingProducts(){
    let trendingProd  = document.querySelector('.trending__products');
    traidingProducts = localAllData[0].trendingProducts;
    trendingProd.innerHTML = traidingProducts.map(prod => {
        return `
            <div class="item">
                    <div class="media">
                      <div class="thumbnail">
                        <a href="#">
                          <img src="${prod.img}" alt="">
                        </a>
                      </div>
                      <div class="hoverable">
                        <ul>
                          <li class="active">
                            <button><i class="ri-heart-line"></i></button>
                          </li>
                          <li>
                                <button><i class="ri-eye-line"></i></button>
                          </li>
                          <li>
                            <button data-prodname="${prod.name}" class="add__cart__btn"><i class="ri-shopping-cart-line"></i></button>
                          </li>
                        </ul>
                      </div>
                      <div class="discount"><span>${prod.discount}%</span></div>
                    </div>
                    <div class="content">
                      <h3 class="main-links">
                        <a href="#">${prod.name}</a>
                      </h3>
                      <div class="rating">
                        <div class="stars"></div>
                        <span class="mini-text">(2,548)</span>
                      </div>

                      <div class="price">
                        <span class="current">$${(prod.price - prod.price * prod.discount / 100).toFixed(2)}</span>
                        <span class="normal mini-text">$${prod.price}</span>
                      </div>
                    </div>
                  </div>
        `
    }).join('');
}


function setFeaturedProducts(){
    let featuresProducts = document.querySelector('.featured__prod');
    featuredProd = localAllData[0].featuredProducts;
    featuresProducts.innerHTML = featuredProd.map(prod => {
        return `
            <div class="item">
                  <div class="media">
                    <div class="thumbnail">
                      <a href="#">
                        <img src="${prod.img}" alt="">
                      </a>
                    </div>
                    <div class="hoverable">
                      <ul>
                        <li class="active">
                          <a href="#"><i class="ri-heart-line"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="ri-eye-line"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="ri-shuffle-line"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div class="discount"><span>${prod.discount}%</span></div>
                  </div>
                  <div class="content">
                    <div class="rating">
                      <div class="stars"></div>
                      <span class="mini-text">(994)</span>
                    </div>
                    <h3 class="main-links">
                      <a href="#">${prod.name}</a>
                    </h3>

                    <div class="price">
                      <span class="current">$${(prod.price - prod.price * prod.discount / 100).toFixed(2)}</span>
                      <span class="normal mini-text">$${prod.price}</span>
                    </div>
                   
                  </div>
                </div>
        `
    }).join('')

}

