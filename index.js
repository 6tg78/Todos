const addTask = document.querySelector('.add-todo');
const list = document.querySelector('.todos');
const removeTask = document.querySelector('.remove');
const search = document.querySelector('.search input');
const searchField = document.querySelector('.search');

// generate LI template
const generateTodo = (task) => {
    const htmlTemplate = `
    <li
        class="list-group-item d-flex justify-content-between align-items-center">
        <span class="span">${task}</span>
        <i class="fas fa-trash remove"></i>
    </li>
    `;

    list.innerHTML += htmlTemplate;
};

// add todo
addTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addTask.add.value.trim();

    if (task.length > 0) {
        generateTodo(task);
        addTask.reset();
    }
});

///delete todos and mark as complete
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
    if (e.target.classList.contains('span')) {
        e.target.classList.toggle('line-through');
    }
});

searchField.addEventListener('submit', (e) => e.preventDefault);

//searching
search.addEventListener('keyup', (e) => {
    const searchValue = search.value.trim().toLowerCase();
    searchFilter(searchValue);
});

const searchFilter = (searchValue) => {
    Array.from(list.children)
        .filter((task) => !task.textContent.toLowerCase().includes(searchValue))
        .forEach((task) => task.classList.add('d-none'));

    Array.from(list.children)
        .filter((task) => task.textContent.toLowerCase().includes(searchValue))
        .forEach((task) => task.classList.remove('d-none'));
};
