const blocks = document.querySelectorAll('.reveal');

function onScroll() {
  blocks.forEach(el => {
    const r = el.getBoundingClientRect();
    const inView = r.top < window.innerHeight && r.bottom > 0;
    el.classList.toggle('reveal_active', inView);
  });
}

onScroll();
window.addEventListener('scroll', onScroll);
