function copyMenu() {
  // copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  //   copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  //   copy .header-top .wrapper to .thetop-nav
  var topNav = document.querySelector(".header-top .wrapper");
  var topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu();

// show mobile menu

const menuButton = document.querySelector(".trigger"),
  closeButton = document.querySelector(".t-close"),
  addClass = document.querySelector(".site");
menuButton.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});
closeButton.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

// show sub menu on mobile

const submenu = document.querySelectorAll(".has-child .icon-small");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expand") : null
  );
  if (this.closest(".has-child").classList != "expand");
  this.closest(".has-child").classList.toggle("expand");
}

// slider

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

// show search
const searchButton = document.querySelector(".t-search"),
  tClose = document.querySelector(".search-close"),
  showClass = document.querySelector(".site");
searchButton.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});

// show dpt-menu
const dptButton = document.querySelector(".dpt-cat .dpt-trigger");
const dptClass = document.querySelector(".site");
dptButton.addEventListener("click", function () {
  dptClass.classList.toggle("showdpt");
});

var productThumb = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
});
var productBig = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: productThumb,
  },
});

// stock products bar width persentage
var stocks = document.querySelectorAll(".products .stock");
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector(".qty-available").innerHTML,
    sold = stocks[x].querySelector(".qty-sold").innerHTML,
    percent = (sold * 100) / stock;

  stocks[x].querySelector(".available").style.width = percent + "%";
}
