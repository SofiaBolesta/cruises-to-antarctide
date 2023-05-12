const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
const headerBody = document.querySelector('.header__body');
const headerBurger = document.querySelector('.header__burger');
let menuIsOpened = false;

const checkViewport = () => {
  if (mobileWidthMediaQuery.matches) {
    menuIsOpened = !menuIsOpened;

    if (menuIsOpened) {
      headerBody.classList.add('open');
      document.body.style.overflowY = 'hidden';

      return;
    }

    document.body.style.overflowY = 'scroll';
    headerBody.classList.remove('open');
  }
};

export const initMenu = () => {
  headerBurger.addEventListener('click', checkViewport);
};
