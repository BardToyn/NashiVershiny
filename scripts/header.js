var className = "header-active";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

window.onload = function() {

  let burgerBtn = document.getElementById('menu_checkbox');

  burgerBtn.onclick = function() {
    if (this.checked) {
      document.getElementsByTagName("header")[0].classList.add('header-active-mob');
    } else {
      document.getElementsByTagName("header")[0].classList.remove('header-active-mob');
    }
  }
};