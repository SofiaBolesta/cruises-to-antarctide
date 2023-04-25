const menuAdvantages = document.querySelector('.menu__advantages');
const menuFeatures = document.querySelector('.menu__features');
const menuContacts = document.querySelector('.menu__contacts');
const footerMenuAdvantages = document.querySelector('.footer__menu-advantages');
const footerMenuFeatures = document.querySelector('.footer__menu-features');
const footerMenuContacts = document.querySelector('.footer__menu-contacts');

const menuScroll = () => {
  if (document.querySelector('.advantages')) {
    menuAdvantages.addEventListener('click', function () {
      document.querySelector('.advantages').scrollIntoView({behavior: 'smooth'});
    });
    footerMenuAdvantages.addEventListener('click', function () {
      document.querySelector('.advantages').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.features')) {
    menuFeatures.addEventListener('click', function () {
      document.querySelector('.features').scrollIntoView({behavior: 'smooth'});
    });
    footerMenuFeatures.addEventListener('click', function () {
      document.querySelector('.features').scrollIntoView({behavior: 'smooth'});
    });
  }
  if (document.querySelector('.contacts')) {
    menuContacts.addEventListener('click', function () {
      document.querySelector('.contacts').scrollIntoView({behavior: 'smooth'});
    });
    footerMenuContacts.addEventListener('click', function () {
      document.querySelector('.contacts').scrollIntoView({behavior: 'smooth'});
    });
  }
};

export {menuScroll};
