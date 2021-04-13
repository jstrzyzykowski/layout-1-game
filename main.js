const hamburger = document.getElementById('hamburger');
const mainNav = document.querySelector('.main-nav');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
  mainNav.classList.toggle('show');
});

window.addEventListener('scroll', () => {
  const navHeight = navbar.offsetHeight;
  const isScrolled = navbar.classList.contains('nav-scrolled');

  if(window.scrollY >= navHeight && !isScrolled) {
    navbar.classList.add('nav-scrolled');
  } else if( window.scrollY < navHeight && isScrolled) {
    navbar.classList.remove("nav-scrolled");
  }
});