const mobileWidthMediaQuery = window.matchMedia('(max-width: 767px)');
const headerBody = document.querySelector('.header__body');

export const openMenuMobile = () => {
  if (mobileWidthMediaQuery.matches) {
    document.getElementById('burger').addEventListener('click', () => {
      headerBody.classList.toggle('open');
      if (headerBody.classList.contains('open') === true) {
        document.body.style.overflowY = 'hidden';
      } else {
        document.body.style.overflowY = 'scroll';
      }
    });
    // Закрытие меню по нажатии ESC
    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        headerBody.classList.remove('open');
        document.body.style.overflowY = 'scroll';
      }
    });
    // Закрытие меню по нажатию вне его области
    document.getElementById('menu').addEventListener('click', (event) => {
      event._isClickWithInMenu = true;
    });
    document.getElementById('burger').addEventListener('click', (event) => {
      event._isClickWithInMenu = true;
    });
    document.body.addEventListener('click', (event) => {
      if (event._isClickWithInMenu) {
        return;
      }
      headerBody.classList.remove('open');
    });
    document.body.addEventListener('click', (event) => {
      if (event._isClickWithInMenu) {
        return;
      }
      headerBody.classList.remove('open');
      document.body.style.overflowY = 'scroll';
    });
  }
};
