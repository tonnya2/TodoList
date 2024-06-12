const todoList = [{
    name: 'make dinner',
    dueDate: '2024-05-08'
}];


renderTodoList();

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const { name, dueDate } = todoObject; //does the same thing as the two above
        const html = `
        <div>${name}</div> 
        <div>${dueDate}</div> 
        <button onclick="
         todoList.splice(${i}, 1);
         renderTodoList();
        " class="delete-todo-btn">Delete</button>
        `;
        todoListHTML += html;
    }


    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}


function addTodo() {
    const inputElement = document.querySelector('.js-Name-input');

    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push({
        name,
        dueDate
    });

    inputElement.value = '';

    renderTodoList();
}