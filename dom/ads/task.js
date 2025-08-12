document.querySelectorAll('.rotator').forEach(rotator => {
  const cases = Array.from(rotator.querySelectorAll('.rotator__case'));
  let index = 0;

  function showNext() {
    // убираем актив класс у текущего
    cases[index].classList.remove('rotator__case_active');

    // вычисл след индекс
    index = (index + 1) % cases.length;

    // получаем новый элемент
    const current = cases[index];

    // добавляем актив класс
    current.classList.add('rotator__case_active');

    // меняем цвет текста
    if (current.dataset.color) {
      current.style.color = current.dataset.color;
    }

    // планируем следующий показ с учётом скорости
    const delay = current.dataset.speed ? parseInt(current.dataset.speed) : 1000;
    setTimeout(showNext, delay);
  }

  // стартуем с задержкой текущего активного
  const active = rotator.querySelector('.rotator__case_active');
  if (active && active.dataset.color) {
    active.style.color = active.dataset.color;
  }
  const startDelay = active && active.dataset.speed ? parseInt(active.dataset.speed) : 1000;
  setTimeout(showNext, startDelay);
});
