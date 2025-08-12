const input = document.querySelector('.tasks__input');
const list = document.querySelector('.tasks__list');

function attachRemove(link) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    link.closest('.task').remove();
  });
}

function makeTask(title) {
  const task = document.createElement('div');
  task.className = 'task';

  const titleEl = document.createElement('div');
  titleEl.className = 'task__title';
  titleEl.textContent = title;

  const remove = document.createElement('a');
  remove.href = '#';
  remove.className = 'task__remove';
  remove.innerHTML = '&times;';
  attachRemove(remove);

  task.appendChild(titleEl);
  task.appendChild(remove);
  return task;
}

// обработчики для уже существующих задач 
document.querySelectorAll('.task__remove').forEach(attachRemove);

// добавление по enter
input.addEventListener('keydown', (e) => {
  if (e.key !== 'Enter') return;
  const text = input.value.trim();
  if (!text) return;
  list.appendChild(makeTask(text));
  input.value = '';
});
