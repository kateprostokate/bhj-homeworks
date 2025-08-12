const book = document.getElementById('book');

// размер шрифтика
const sizeLinks = document.querySelectorAll('.book__control_font-size .font-size');

sizeLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    sizeLinks.forEach(l => l.classList.remove('font-size_active'));
    link.classList.add('font-size_active');

    book.classList.remove('book_fs-small', 'book_fs-big');
    const size = link.dataset.size;
    if (size === 'small') book.classList.add('book_fs-small');
    if (size === 'big') book.classList.add('book_fs-big');
  });
});

// цвет текста
const textColorLinks = document.querySelectorAll('.book__control_color .color');

if (textColorLinks.length) {
  textColorLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      textColorLinks.forEach(l => l.classList.remove('color_active'));
      link.classList.add('color_active');

      book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
      const color = link.dataset.textColor;
      if (color) book.classList.add(`book_color-${color}`);
    });
  });
}

// фон
const bgColorLinks = document.querySelectorAll('.book__control_background .color');

if (bgColorLinks.length) {
  bgColorLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      bgColorLinks.forEach(l => l.classList.remove('color_active'));
      link.classList.add('color_active');

      book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
      const bg = link.dataset.bgColor;
      if (bg) book.classList.add(`book_bg-${bg}`);
    });
  });
}
