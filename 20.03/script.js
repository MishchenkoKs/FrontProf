function fetchData(url) {
    return new Promise(function (resolve, reject) {
       
           try{
            fetch(url)
            .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (data) {
                            resolve(data)
                        })
                }
            })
           } catch(e){
            // throw new Error
            console.error('Ошибка:' , e)
           }
    })
}
fetchData('https://jsonplaesdceholder.typicode.com/pouyjkjkjsts')
.then(function(data){
console.log(data);
})
.catch(function(e){
    console.log('Ошибка:', e);
})



// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => response.json())
//       .then(json => console.log(json))

// ----------------------------------
// Задача. Создать два промиса. Первый должен вызвать resolve через 2 секунды, а второй через 5. Для задержки используйте setTimeout.
// const firstPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('Процесс 1 завершился')
//     }, 2000)
// })

// const secondPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve('Процесс 2 завершился')
//     }, 5000)
// })
// console.log(firstPromise, secondPromise);
// firstPromise.then(function(response){
// console.log(response);
// })
// secondPromise.then(function(response){
//     console.log(response);
// })
// Promise.all([firstPromise, secondPromise])
// .then(function(response){
//     console.log('Все запросы отработаны', response);
// })
// .catch(function(reject){

// })