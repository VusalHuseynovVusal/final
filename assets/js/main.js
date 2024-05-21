function copyMenu() {
  // copy inside .dpt-cat to .departments
  var dptCategory = document.querySelector(".dpt-cat");
  var dptPlace = document.querySelector(".departments");
  dptCategory.innerHTML = dptPlace;

  //   copy inside nav to nav
  var mainNav = document.querySelector(".header-nav nav");
  var navPlace = document.querySelector(".off-canvas nav");
  mainNav.innerHTML = navPlace.innerHTML;

  //   copy .header-top .wrapper to .thetop-nav
  var topNav = documnet.querySelector(".header-top");
  var topPlace = documnet.querySelector(".off-canvas .thetop-nav");
  topNav.innerHTML = topPlace.innerHTML;
}
copyMenu();
