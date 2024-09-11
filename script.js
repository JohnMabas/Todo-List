const todoList = [{
   name: 'make dinner', 
   dueDate: '2024-12-22',
},{
    name: 'wash dishes',
    dueDate: '2024-12-22'
}];

renderTodoList();

 function renderTodoList() {

let todoListHtml = '';

todoList.forEach(function(todoObject, index) {
    const {name, dueDate} = todoObject;
    const html = `
    <div>${name}</div> 
    <div>${dueDate}</div>
    <button onClick="
        todoList.splice(${index}, 1);
        renderTodoList();
    " class="delete-todo-button">Delete</button> 

    `;
    todoListHtml += html;

});

document.querySelector('.js-todo-list')
.innerHTML = todoListHtml;

 };

function addTodo() {
    const inputElement = document.querySelector('.js-name-input')
    const name  = inputElement.value;

    const deleteInputElement = document.querySelector('.js-due-date-input');
    const dueDate = deleteInputElement.value;

    
    todoList.push({
        // name: name,
        // dueDate: dueDate
        name,
        dueDate
    });
    

    inputElement.value = '';

    renderTodoList();
}