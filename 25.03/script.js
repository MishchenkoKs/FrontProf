//promise


// function delayApi (delayedData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             resolve (delayedData)
//         }, 3000)
//     })
//     .then ((response) => {
//     console.log(response);
// })
// }

// delayApi('hehehe')

//  const fetchApi = async () => {

//  }


//step 1. async fn
 async function fetchApi () {
//step 2 url
const url = `https://randomuser.me/`
//step 3 try catch (отработка исключений)
try {
   //step 4 - request with fetch
   const response = await fetch(url)
  
   if (!response.ok) {
    throw new Error()
   }
} catch(e) {
    console.log();
   
}

 }
