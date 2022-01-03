const mobileMenu = document.querySelector('.mobile-menu-list');
const overley = document.querySelector('.overley');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const closeMobileMenuBtn = document.querySelector('.btn-close');

const openMobileMenu = () => {
  mobileMenu.classList.add('active');
  overley.classList.add('active');
  document.body.style.overflowY = 'clip';
};

const closeMobileMenu = () => {
  mobileMenu.classList.remove('active');
  overley.classList.remove('active');
  document.body.style.overflowY = '';
};

mobileMenuBtn.addEventListener('click', openMobileMenu);

closeMobileMenuBtn.addEventListener('click', closeMobileMenu);

overley.addEventListener('click', closeMobileMenu);