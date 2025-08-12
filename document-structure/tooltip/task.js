(function () {
  const SELECTOR = '.has-tooltip';

  // один общий tooltip на всю страницу
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip';
  tooltip.style.position = 'absolute';
  document.body.appendChild(tooltip);

  let activeTarget = null;

  function placeTooltip(target, position) {
    const rect = target.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();
    let top = 0;
    let left = 0;

    switch (position) {
      case 'top':
        top = rect.top + window.scrollY - tipRect.height - 5;
        left = rect.left + window.scrollX + (rect.width - tipRect.width) / 2;
        break;
      case 'left':
        top = rect.top + window.scrollY + (rect.height - tipRect.height) / 2;
        left = rect.left + window.scrollX - tipRect.width - 5;
        break;
      case 'right':
        top = rect.top + window.scrollY + (rect.height - tipRect.height) / 2;
        left = rect.right + window.scrollX + 5;
        break;
      case 'bottom':
      default:
        top = rect.bottom + window.scrollY + 5;
        left = rect.left + window.scrollX + (rect.width - tipRect.width) / 2;
        break;
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  }

  function showTooltip(target) {
    tooltip.textContent = target.getAttribute('title') || '';
    tooltip.classList.add('tooltip_active');

    // временно показать, чтобы получить размеры и корректно спозиционировать
    tooltip.style.visibility = 'hidden';
    tooltip.style.display = 'block';
    const position = target.dataset.position || 'bottom';
    placeTooltip(target, position);
    tooltip.style.visibility = '';
  }

  function hideTooltip() {
    tooltip.classList.remove('tooltip_active');
    tooltip.style.display = 'none';
  }

  document.addEventListener('click', (e) => {
    const link = e.target.closest(SELECTOR);
    if (!link) {
      if (activeTarget) {
        hideTooltip();
        activeTarget = null;
      }
      return;
    }

    e.preventDefault();

    if (activeTarget === link && tooltip.classList.contains('tooltip_active')) {
      hideTooltip();
      activeTarget = null;
      return;
    }

    activeTarget = link;
    showTooltip(link);
  });

  window.addEventListener('scroll', () => {
    if (activeTarget && tooltip.classList.contains('tooltip_active')) {
      placeTooltip(activeTarget, activeTarget.dataset.position || 'bottom');
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (activeTarget && tooltip.classList.contains('tooltip_active')) {
      placeTooltip(activeTarget, activeTarget.dataset.position || 'bottom');
    }
  });
})();
