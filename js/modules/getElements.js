const appContainer = document.querySelector('.app-container');
appContainer.className = 'vh-100 w-100 d-flex align-items-center';
appContainer.classList.add('justify-content-center');
appContainer.classList.add('flex-column');

const appTitle = document.createElement('h3');
appTitle.textContent = 'Todo App';

export { appContainer, appTitle };
