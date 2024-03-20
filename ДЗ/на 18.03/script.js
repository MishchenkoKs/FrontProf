// ---------------------------------------------------------------------------
// Создайте форму с полем для ввода имени пользователя.
// При отправке формы сохраните введенное имя в localStorage.
// При загрузке страницы проверьте наличие сохраненного имени в localStorage и, если оно есть, отобразите его на странице.

const userName = document.querySelector('#userName')
const form = document.querySelector('#formId')
const ul = document.querySelector('#userList')

let userNameList = [];
outLocalStorage()
function newList(){
    ul.innerHTML = '';
    userNameList.forEach((name) => {
        const newLi = document.createElement('li')
        newLi.innerText = `Имя пользователя: ${name}`
        ul.append(newLi);

    });

    const newUserList = JSON.stringify(userNameList)
    localStorage.setItem('userNames', newUserList)
}

function newName(event){
    event.preventDefault()
    const nameValue = userName.value;
    if (nameValue){
        userNameList.push(nameValue)
        newList()
        nameValue.value = '';
    }
}

form.addEventListener('submit', newName)

function outLocalStorage(){
    window.addEventListener('load', function(){
        if(localStorage.getItem('userNames')){
            userNameList = JSON.parse(localStorage.getItem('userNames'))
            newList()
        }
    })
}

// ----------------------------------------------------------------------------
// Счетчик посещений:
// Создайте переменную в localStorage для хранения количества посещений.
// При загрузке страницы увеличивайте значение этой переменной на 1 и сохраняйте обновленное значение в localStorage.
// Отобразите количество посещений на странице.

let visitCount = localStorage.getItem("visitCount");

visitCount = parseInt(visitCount);
if (isNaN(visitCount)) {
  visitCount = 0;
}
visitCount++;

document.querySelector("#visitCount").textContent = visitCount;
localStorage.setItem("visitCount", visitCount.toString());


//----------------------------------------------------------------------------
// Список задач:
//Создайте простой список задач с полем для ввода новой задачи и кнопкой для добавления.
// При добавлении новой задачи сохраняйте все задачи в localStorage.
// При загрузке страницы отобразите сохраненный список задач.

const formToDo = document.querySelector('#secondId')
const inputToDo = document.querySelector('#toDoList')
const ulToDoList = document.querySelector('#newToDoList')

let arrToDoList = [];
listOutLocal();

function newToDoList(){
    ulToDoList.innerHTML = ''
    arrToDoList.forEach((task) => {
        const liToDo = document.createElement(`li`);
        liToDo.innerText = `Список задач: ${task}`;
        ulToDoList.append(liToDo);
    })
    const newArrToDoList = JSON.stringify(arrToDoList);
    localStorage.setItem('ToDoList', newArrToDoList)
}

function newTask(event){
    event.preventDefault()
    const listValue = inputToDo.value;
    if(listValue){
        arrToDoList.push(listValue)
        newToDoList();
        inputToDo.value = '';
    }

}

formToDo.addEventListener('submit', newTask)

function listOutLocal(){
    window.addEventListener('load', function() {
        if (localStorage.getItem('ToDoList')){
            arrToDoList = JSON.parse(localStorage.getItem('ToDoList'));
            newToDoList();
        }
    })
}
