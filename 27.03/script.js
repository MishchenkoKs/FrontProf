// Задача: достать всех пользователей из апи, распечатать данные о пользователях в карточки имя, имя пользователя, мейл, адрес со всеми полями адреса, стилизовать по фен шую

async function userApi(){
    const url = "https://jsonplaceholder.typicode.com/users/"
    try{
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Ошибка при получении данных')
        }
        const data = await response.json();
        // console.log(data);
        data.forEach((item) => {
            console.log(item)
            const userCard = document.createElement('div');
            userCard.classList.add('user_card')

            const userImage = document.createElement('img')
            userImage.classList.add('user_img')

            const userName = document.createElement('p')
            userName.textContent = `имя: ${item.name}`

            const nickName = document.createElement('p')
            nickName.textContent = `username: ${item.username}`

            const email = document.createElement('p')
            email.textContent = `email: ${item.email}`

            const address = document.createElement('p')
            address.textContent = `address: ${item.address.city}`

            userCard.append(userImage,userName, nickName, email, address)

            const userContainer = document.querySelector('.user_container')

            userContainer.append(userCard)
        })

    }catch(error) {
        console.error('Ошибка при получении:', error)
    }
}
userApi();

