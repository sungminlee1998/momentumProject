const todoContainer = document.querySelector('.todoContainer');
const todoForm = todoContainer.querySelector('.todoForm');
const todoBlank = document.getElementById('todoBlank');
const todoInputButton = document.getElementById('todoInputButton');
const inputListUl = document.querySelector('.inputList >  ul');


let arrayForLs = []

function saveTodos(){
    localStorage.setItem('todoLists', JSON.stringify(arrayForLs));
}


function handleTodoInput(e){
    e.preventDefault()
    const addedTodo = todoBlank.value
    todoBlank.value = ''
    if(addedTodo !== ""){
        const newList = document.createElement('li')
        newList.innerText = addedTodo
        inputListUl.append(newList)
        arrayForLs.push(addedTodo)
        saveTodos()
    }
}

const savedTodos = localStorage.getItem('todoLists');

if(savedTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    parsedTodos.forEach(element => {
        const newList = document.createElement('li')
        newList.innerText = element
        inputListUl.append(newList)
        arrayForLs.push(element)
    })
}
   


todoInputButton.addEventListener('click', handleTodoInput)