const burgerButton = document.querySelector('.burger-container');
const burgerMenu = document.querySelector('.burger-menu');
const headerLogo = document.querySelector('.header__logo');

burgerButton.addEventListener('click', () => {
  burgerMenu.classList.toggle('open');
  burgerButton.querySelector('.burger-button').classList.toggle('open');
  if (burgerMenu.classList.contains('open')) {
    headerLogo.classList.add('open');
  } else {
    headerLogo.classList.remove('open');
  }
});
