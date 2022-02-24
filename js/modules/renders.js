import { createButton } from './createElements.js';

export const renderTask = (task) => {
  const row = document.createElement('tr');
  row.className = task.ready ? 'table-success' : task.important;

  const tdId = document.createElement('td');
  tdId.className = 'td-id';

  const tdTask = document.createElement('td');
  tdTask.className = task.ready ?
    'text-decoration-line-through' : 'task';
  tdTask.textContent = task.task;
  task.ready ? tdTask.contentEditable = 'false' :
    tdTask.contentEditable = 'true';

  const tdStatus = document.createElement('td');
  tdStatus.className = 'status';
  tdStatus.textContent = task.ready ? 'Завершена' : 'Выполняется';

  const tdButtons = document.createElement('td');

  const delButton = createButton('Удалить');
  delButton.classList.add('btn-danger');

  const endButton = createButton('Завершить');
  endButton.classList.add('btn-success');
  if (task.ready) endButton.classList.add('disabled');

  tdButtons.append(delButton, ' ', endButton);

  row.append(tdId, tdTask, tdStatus, tdButtons);

  return row;
};

export const renderTaskList = todoList => {
  const tbody = document.createElement('tbody');
  todoList.forEach(element => {
    tbody.append(renderTask(element));
  });

  return tbody;
};
