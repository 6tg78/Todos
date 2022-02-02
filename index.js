const addTask = document.querySelector('.add-todo');
const list = document.querySelector('.todos');
const removeTask = document.querySelector('.remove');

const generateTodo = (task) => {
    const htmlTemplate = `
    <li
        class="list-group-item d-flex justify-content-between align-items-center">
        <span>${task}</span>
        <i class="fas fa-trash remove"></i>
    </li>
    `;

    list.innerHTML += htmlTemplate;
};

addTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = addTask.add.value.trim();

    if (task.length > 0) {
        generateTodo(task);
        addTask.reset();
    }
});

///delete todos
list.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove')) {
        e.target.parentElement.remove();
    }
});
