export const renumberId = () => {
  const ids = document.querySelectorAll('.td-id');
  for (let i = 0; i < ids.length; i++) {
    ids[i].textContent = `${i + 1}`;
  }
};

export const setStorage = (user, data) => {
  localStorage.setItem(user, JSON.stringify(data));
};

export const getStorage = user => JSON.parse(localStorage.getItem(user));

export const removeTask = target => {
  const row = target.closest('tr');
  row.className = 'table-success';
  const task = row.querySelector('.task');
  task.className = 'text-decoration-line-through';
  task.contentEditable = false;
  const status = row.querySelector('.status');
  status.textContent = 'Завершена';
  target.classList.add('disabled');
  todoList[row.querySelector('.td-id').textContent - 1].ready = 1;
  setStorage(user, todoList);
};
