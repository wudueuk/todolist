import { createButton } from './createElements.js';

export const renderTask = (task) => {
  const row = document.createElement('tr');
  row.className = task.ready ? 'table-success' : task.important;

  const tdId = document.createElement('td');
  tdId.className = 'td-id';

  const tdTask = document.createElement('td');
  tdTask.textContent = task.task;

  const tdStatus = document.createElement('td');
  tdStatus.className = 'status';

  const tdButtons = document.createElement('td');
  const delButton = createButton('Удалить', 'btn-danger');
  const endButton = createButton('Завершить', 'btn-success');
  //const editButton = createButton('Редактировать', 'btn-warning');
  tdButtons.append(delButton, ' ', endButton);
  //tdButtons.append(delButton, ' ', endButton, ' ', editButton);

  if (task.ready) {
    tdTask.className = 'text-decoration-line-through';
    tdTask.contentEditable = 'false';
    tdStatus.textContent = 'Завершена';
    endButton.classList.add('disabled');
    //editButton.classList.add('disabled');
  } else {
    tdTask.className = 'task';
    tdTask.contentEditable = 'true';
    tdStatus.textContent = 'Выполняется';
  }

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
