import {
  createAddForm,
  createTableWrapper,
  createTaskTable,
} from './createElements.js';
import { appContainer, appTitle } from './getElements.js';
import { renderTaskList, renderTask, } from './renders.js';
import { renumberId } from './controls.js';
import { setStorage, getStorage } from './controls.js';
import { removeTask } from './controls.js';

export const todoApp = user => {
  const formAddTask = createAddForm();
  appContainer.append(appTitle, formAddTask);


  // Загрузка списка задач
  const todoList = localStorage.getItem(user) ?
    getStorage(user) : [];

  // Создание и вывод таблицы задач
  const tableWrapper = createTableWrapper();
  const taskTable = createTaskTable();
  tableWrapper.append(taskTable);
  appContainer.append(tableWrapper);

  // Вывод списка запланированных задач
  const taskList = renderTaskList(todoList);
  taskTable.append(taskList);
  renumberId();

  // Вешаем слушатели на невыполненные задачи
  const editable = taskList.querySelectorAll('td[contenteditable="true"]');
  for (let i = 0; i < editable.length; i++) {
    editable[i].addEventListener('blur', e => {
      const row = e.target.closest('tr');
      todoList[row.querySelector('.td-id').textContent - 1].task =
        editable[i].textContent;
      setStorage(user, todoList);
    });
  }

  // Добавление новой задачи
  formAddTask.addEventListener('submit', e => {
    e.preventDefault();
    if (e.target.newitem.value !== '') {
      const newTask = {
        task: e.target.newitem.value,
        important: formAddTask.sel.value,
        ready: 0,
      };
      todoList.push(newTask);
      setStorage(user, todoList);
      formAddTask.btnSubmit.classList.add('disabled');
      taskList.append(renderTask(newTask));
      renumberId();
      formAddTask.reset();
    }
  });

  // Удаление задачи и Отметка о завершении задачи
  taskList.addEventListener('click', e => {
    const target = e.target;
    // Удаление задачи
    if (target.classList.contains('btn-danger')) {
      if (confirm('Вы точно ходите удалить задачу?')) {
        const row = target.closest('tr');
        todoList.splice(row.querySelector('.td-id').textContent - 1, 1);
        row.remove();
        renumberId();
        setStorage(user, todoList);
      }
    }
    // Завершение задачи
    if (target.classList.contains('btn-success')) {
      removeTask(target);
    }
  });
};
