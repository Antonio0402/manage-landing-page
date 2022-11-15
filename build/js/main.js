const menuBtn = document.querySelector('[aria-controls="primary-navigation"]');
const menuNav = document.getElementById('primary-navigation');

function toggleMenu() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
  const visibility = menuNav.getAttribute('data-visible') === 'true' || false;
  
  menuBtn.setAttribute('aria-expanded', !expanded);
  menuNav.setAttribute('data-visible', !visibility);
}

menuBtn.addEventListener('click', toggleMenu);

const slider = new A11YSlider(document.querySelector(".slider"), {
  arrows: false,
  container: false,
  centerMode: true
});