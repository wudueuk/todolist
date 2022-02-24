// Создание окна авторизации
export const createAuthModal = () => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Авторизация</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" 
          aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
        </div>
      </div>
    </div>
  </div>
  `;

  const label = document.createElement('label');
  label.for = 'userName';
  label.className = 'form-label';
  label.textContent = 'Здравствуйте, представтесь пожалуйста!';

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'form-control';
  input.name = 'userName';
  input.required = true;
  input.addEventListener('focus', () => {
    input.placeholder = '';
  });

  const submit = document.createElement('button');
  submit.className = 'btn btn-primary';
  submit.textContent = 'Войти';

  const mb = modal.querySelector('.mb-3');
  mb.append(label, input);
  mb.after(submit);

  modal.style.display = 'block';

  return { modal, submit, input };
};

// Создание формы ввода новой задачи
export const createAddForm = () => {
  const form = document.createElement('form');
  form.className = 'd-flex align-items-center mb-3';

  const label = document.createElement('label');
  label.className = 'form-group me-3 mb-0 col-4';

  const input = document.createElement('input');
  input.className = 'form-control';
  input.name = 'newitem';
  input.type = 'text';
  input.placeholder = 'ввести задачу';
  label.append(input);

  const select = document.createElement('select');
  select.className = 'form-select me-3 mb-0';
  select.name = 'important';
  select.innerHTML = `
  <option value="table-light" selected>обычная</option>
  <option value="table-warning">важная</option>
  <option value="table-danger">срочная</option>
  `;
  form.sel = select;

  const buttonSubmit = document.createElement('button');
  buttonSubmit.className = 'btn btn-primary me-3 disabled';
  buttonSubmit.type = 'submit';
  buttonSubmit.textContent = 'Сохранить';
  form.btnSubmit = buttonSubmit;

  const buttonReset = document.createElement('button');
  buttonReset.className = 'btn btn-warning';
  buttonReset.type = 'reset';
  buttonReset.textContent = 'Очистить';

  form.append(label, select, buttonSubmit, buttonReset);

  input.addEventListener('input', () => {
    if (input.value !== '') {
      buttonSubmit.classList.remove('disabled');
    } else {
      if (!buttonSubmit.classList.contains('disabled')) {
        buttonSubmit.classList.add('disabled');
      }
    }
  });

  return form;
};

// Создание враппера для таблицы
export const createTableWrapper = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';

  return wrapper;
};

// создание таблицы для отображения задач
export const createTaskTable = () => {
  const table = document.createElement('table');
  table.className = 'table table-hover table-bordered';

  const tableHead = document.createElement('thead');
  tableHead.innerHTML = `
  <tr>
    <th scope="col">№</th>
    <th scope="col">Задача</th>
    <th scope="col">Статус</th>
    <th scope="col">Действия</th>
  </tr>
  `;
  table.append(tableHead);

  return table;
};

export const createButton = text => {
  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = text;

  return button;
};
