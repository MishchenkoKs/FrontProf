// Создать функцию, которая получает id пользователя и выводит в консоль данные о пользователе. Если такого пользователя нет, необходимо вызвать исключение “Такого пользователя нет”. 
// Ссылка: https://jsonplaceholder.typicode.com/users/<id пользователя>
// Доработать ранее созданную функцию таким образом, чтобы помимо данных о пользователе (имя и почта) выводились все посты пользователя.
// Ссылка: 
// https://jsonplaceholder.typicode.com/users/<id пользователя>
// https://jsonplaceholder.typicode.com/posts?userId=<id пользователя>

async function userApi(userId) {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`
    const postUrl = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    try {
        const response = await fetch(url);
        const responsePost = await fetch(postUrl)
        if (!response.ok && !responsePost.ok) {

            throw new Error('Ошибка при получении данных')

        }
        const data = await response.json();
       
        const dataPost = await responsePost.json();
        createElement(data, dataPost)
        console.log(data);
        console.log(dataPost);
    }catch(error){
    console.error('Ошибка', error)
    }
}
userApi(3)

function createElement (data, dataPost){
    const userData = document.querySelector('.userData')
    userData.innerHTML = '';
    const dataContainer = document.createElement('div');
    dataContainer.classList.add('dataContainer')
    const userName = document.createElement('h3')
    userName.textContent = `${data.name}`
    const email = document.createElement('p')
    email.textContent = `${data.email}`
    dataContainer.append(userName, email);
    userData.append(dataContainer)

}

