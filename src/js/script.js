const jumpToTopButton = document.getElementById('jump-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight) {
    jumpToTopButton.classList.remove('hidden');
  } else {
    jumpToTopButton.classList.add('hidden');
  }
});
