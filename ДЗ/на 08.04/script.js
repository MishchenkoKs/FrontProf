// {/* <div class="shadow">
// <div class="modal_window">
//     <h3>Fetch posts</h3>
//     <div class="modal_content">
//         <div class="post_item">
//             <div class="post_title">
//                 <p>
//                     Title:
//                 </p>
//                 <p>
//                     random
//                 </p>
//             </div>
//             <div class="post_body">
//                 <p>
//                     Body:
//                 </p>
//                 <p>
//                     rsafg
//                 </p>
//             </div>
//         </div>
//     </div>
//     <div class="close"></div>
// </div>
// </div> */}

async function getApi(){
const url = 'https://jsonplaceholder.typicode.com/posts';
try {
    const response = await fetch(url);
    if(!response.ok) {
        throw new Error();
    }
    const data = await response.json();
    console.log(data);
    makeElement(data);
} catch (error) {
    console.error('DANGER: Нет данных ', error);
}
}
//  getApi();

 function makeElement(data){
    const shadow = document.createElement('div');
    shadow.classList.add('shadow');
    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal_window');
    const modalName = document.createElement('h3');
    modalName.textContent = 'Fetch posts';
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal_content');
    data.forEach(element => {
        const postItem = document.createElement('div');
        postItem.classList.add('post_item');
        const postTitle = document.createElement('div');
        postTitle.classList.add('post_title');
        const titleInfo = document.createElement('p');
        titleInfo.textContent = 'Title:';
        const titleText = document.createElement('p');
        titleText.textContent = `${element.title}`;
        const postBody = document.createElement('div');
        postBody.classList.add('post_body');
        const bodyInfo = document.createElement('p');
        bodyInfo.textContent = 'Body:';
        const textBody = document.createElement('p');
        textBody.textContent = `${element.body}`;
        postItem.append(postTitle, postBody);
        postTitle.append(titleInfo, titleText);
        postBody.append(bodyInfo, textBody);
        modalContent.append(postItem);
    });

const modalClose = document.createElement('div');
modalClose.classList.add('close');
shadow.append(modalWindow);
modalWindow.append(modalName,modalClose,modalContent);
const modalPlace = document.querySelector('.modal_place');
modalPlace.append(shadow);


modalClose.addEventListener('click', function(){
    shadow.remove()
})
}
const modalButton = document.querySelector('.btn');
modalButton.addEventListener('click', function(){
    getApi();
})

