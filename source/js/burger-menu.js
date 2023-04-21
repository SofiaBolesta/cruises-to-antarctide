export const openMenuMobile = () => {
  document.getElementById('burger').addEventListener('click', () => {
    document.querySelector('.header__body').classList.toggle('open');
  });
};
