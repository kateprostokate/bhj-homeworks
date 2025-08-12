const cart = document.querySelector('.cart__products');

document.addEventListener('click', (e) => {
  // изменение количества товара . карточка
  const qtyBtn = e.target.closest('.product__quantity-control');
  if (qtyBtn) {
    const box = qtyBtn.closest('.product__quantity-controls');
    const valueEl = box.querySelector('.product__quantity-value');
    let value = parseInt(valueEl.textContent, 10) || 1;

    if (qtyBtn.classList.contains('product__quantity-control_inc')) {
      value += 1;
    } else if (qtyBtn.classList.contains('product__quantity-control_dec')) {
      value = Math.max(1, value - 1);
    }
    valueEl.textContent = value;
    return;
  }

  // корзина
  const addBtn = e.target.closest('.product__add');
  if (addBtn) {
    e.preventDefault();

    const product = addBtn.closest('.product');
    if (!product) return;

    const id = product.dataset.id;
    const count = parseInt(product.querySelector('.product__quantity-value')?.textContent, 10) || 1;
    const imgSrc = product.querySelector('.product__image')?.getAttribute('src') || '';

    // ищем товар в корзине по data-id
    let cartItem = cart.querySelector(`.cart__product[data-id="${id}"]`);
    if (cartItem) {
      // увеличиваем количество
      const countEl = cartItem.querySelector('.cart__product-count');
      const current = parseInt(countEl.textContent, 10) || 0;
      countEl.textContent = current + count;
    } else {
      // создаём новый элемент в корзине
      cartItem = document.createElement('div');
      cartItem.className = 'cart__product';
      cartItem.dataset.id = id;

      const img = document.createElement('img');
      img.className = 'cart__product-image';
      img.src = imgSrc;

      const cnt = document.createElement('div');
      cnt.className = 'cart__product-count';
      cnt.textContent = String(count);

      cartItem.appendChild(img);
      cartItem.appendChild(cnt);
      cart.appendChild(cartItem);
    }
  }
});
