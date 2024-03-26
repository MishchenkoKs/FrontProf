//отправка запроса на удаленный сервер

async function fetchApi() { //1 шаг ассинхронная функция
    const url = `https://jsonplaceholder.typicode.com/posts`
    // 2 шаг : отработка исключений 
    try{
        //шаг 3: отправляем запрос на API
        const response = await fetch(url)
        //шаг 4: отлов ошибки
        if( !response.ok) {
            throw new Error()
        }
        //шаг 5: получение ответа в формате js 
        const data = await response.json()
        console.log(data);
    }catch(error) {
        console.error ('Ошибка: ', error) //выводит в консоль ошибку

    }
}
fetchApi()

//---------------------------------------------

async function fetchToDo(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try{
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error()
        }
        const data = await response.json()
        console.log(data);
    } catch(error){
        console.error('Exsample error: ', error)
    }
}
fetchToDo(6)