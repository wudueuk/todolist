import { createAuthModal } from './modules/createElements.js';
import { todoApp } from './modules/todo.js';

const init = () => {
  const authModal = createAuthModal();
  document.body.append(authModal.modal);

  authModal.submit.addEventListener('click', () => {
    const user = authModal.input.value;
    if (user !== '' || user === null) {
      authModal.modal.style.display = 'none';
      todoApp(user);
      // Todo: Отключить слушатель и возможно удалить модальное окно
    } else {
      authModal.input.placeholder = 'Имя пользователя не должно быть пустым';
    }
  });
};

init();
