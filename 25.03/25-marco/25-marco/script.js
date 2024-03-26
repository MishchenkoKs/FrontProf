//PROMISE

// function delayApi(delayedData) {

//     const response = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(delayedData)
//         }, 3000)
//     })
//     console.log(response)
// }

// delayApi('hehehe')

// delayApi('delayed 1 time')
// .then((response) => {
//     console.log(response)
// })
// .then(() => {
//     console.log('delayed 2nd time')
// })
// .catch((e) => {
//     console.log(e)
// })
// .then((response) => {
//     console.log(response)
// })
// .then((response) => {
//     console.log('console.log hello')
// })

// const fetchApi = async () => {

// }

// const container = document.querySelector('.container')


// //step 1. async fn
// async function fetchApi() {
//   //step 2 url
//   const url = `https://randomuser.me/api`;
//   //step 3 try catch ( отработка исключений)
//   try {
//     //step 4 - request with fetch
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error();
//     }
//     const data = await response.json() 
//     console.log(data)
//     const newTitle = document.createElement('div')
//     const nameResult = data.results[0].name
//     console.log(nameResult)
//     newTitle.textContent = `${nameResult.title} ${nameResult.first} ${nameResult.last}`
//     container.append(newTitle)
    
//   } catch (e) {
//     console.error("The data was not received: ", e)
//   }
// }

// fetchApi()

//fetchApi()
// fetc('', {
//   method: 'POST',
//   headers: ,
//   body: {
//     title: '',
//     desc: 'he'

//   }
// })

// async function fetchCatApi() {
//   const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`
//   try {
//     const response = await fetchCatApi(url)
//     const data = await response.json()
//     console.log(data);
//   } catch(e){
//     console.error("request was not sent successfully");
//   }
// }

// fetchCatApi()


function fetchCatApi(){
  const url = `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`

try{
  
} catch (e){
  console.error('e')
}



}


