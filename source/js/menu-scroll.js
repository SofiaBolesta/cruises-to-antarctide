const menuAdvantages = document.querySelector('.menu__advantages');
const menuFeatures = document.querySelector('.menu__features');
const menuContacts = document.querySelector('.menu__contacts');

const blockFocusAdvantages = document.querySelector('.advantages');
const blockFocusFeatures = document.querySelector('.features');
const blockFocusContacts = document.querySelector('.contacts');

const menuScroll = () => {
  menuAdvantages.addEventListener('click', function () {
    blockFocusAdvantages.scrollIntoView({behavior: 'smooth'});
  });
  menuFeatures.addEventListener('click', function () {
    blockFocusFeatures.scrollIntoView({behavior: 'smooth'});
  });
  menuContacts.addEventListener('click', function () {
    blockFocusContacts.scrollIntoView({behavior: 'smooth'});
  });
};

export {menuScroll};
