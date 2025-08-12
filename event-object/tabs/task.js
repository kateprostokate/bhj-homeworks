document.querySelectorAll('.tab__navigation').forEach(nav => {
  const tabs = Array.from(nav.querySelectorAll('.tab'));
  const contentsContainer = nav.nextElementSibling;
  const contents = Array.from(contentsContainer.querySelectorAll('.tab__content'));

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const activeTab = nav.querySelector('.tab_active');
      const activeContent = contentsContainer.querySelector('.tab__content_active');

      if (activeTab) activeTab.classList.remove('tab_active');
      if (activeContent) activeContent.classList.remove('tab__content_active');

      tab.classList.add('tab_active');
      contents[index].classList.add('tab__content_active');
    });
  });
});
