// Создайте элементы DOM для отображения информации о случайном пользователе, полученного с помощью Random User API

async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    displayUserInfo(data.results[0]);
}

function displayUserInfo(user) {
    const userInfoContainer = document.getElementById('user-info');
    userInfoContainer.innerHTML = ''; 

    const userElement = document.createElement('div');
    userElement.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Gender: ${user.gender}</p>
        <p>Country: ${user.location.country}</p>
    `;

    userInfoContainer.appendChild(userElement);
}

//Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью The Cat API.

async function fetchRandomCat() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await response.json();
        displayCatImage(data[0].url);
    } catch (error) {
        console.error('Error fetching random cat:', error);
    }
}

function displayCatImage(imageUrl) {
    const catImagesContainer = document.getElementById('cat-images');
    catImagesContainer.innerHTML = '';
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;
    imageElement.alt = 'Random Cat';

    catImagesContainer.appendChild(imageElement);
}

// Создайте элементы DOM для отображения текущей погоды для вашего города, полученной с помощью OpenWeather API, включая описание и температуру. С ПОГОДОЙ НЕ ПОЛУЧИЛОСЬ, НЕ ХОЧУ БЕЗДУМНО КОПИПАСТИТЬ 

// Создайте элементы DOM для отображения заголовков и ссылок на актуальные новости, полученные с помощью News API. ТАКАЯ ЖЕ ИСТОРИЯ

async function fetchRandomJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random?lang=ru');
        const data = await response.json();
        displayJoke(data.value);
    } catch (error) {
        console.error('Ошибка при получении шутки про Чака Норриса:', error);
    }
}

// Создайте элементы DOM для отображения случайных шуток, полученных с Chuck Norris API.

function displayJoke(joke) {
    const jokeContainer = document.getElementById('joke-container');
    jokeContainer.innerHTML = '';

    const jokeElement = document.createElement('p');
    jokeElement.textContent = joke;

    const baDumTssElement = document.createElement('p');
    baDumTssElement.textContent = ' *BA DUM TSS*';
    baDumTssElement.classList.add('ba-dum-tss'); 

    jokeContainer.appendChild(jokeElement);
    jokeContainer.appendChild(baDumTssElement);
}

// Создайте элементы DOM для отображения названий и авторов случайных книг, полученных с помощью Google Books API. и здесь ругается

// Создайте элементы DOM для отображения текущего курса биткоина, полученного с помощью CoinDesk API.

async function fetchBitcoinRate() {
    try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        displayBitcoinRate(data.bpi.USD.rate);
    } catch (error) {
        console.error('Error fetching Bitcoin rate:', error);
    }
}

function displayBitcoinRate(rate) {
    const bitcoinRateContainer = document.getElementById('bitcoin-rate');
    bitcoinRateContainer.innerHTML = ''; 

    const rateElement = document.createElement('p');
    rateElement.textContent = `Current Bitcoin Rate: $${rate}`;

    bitcoinRateContainer.appendChild(rateElement);
}


fetchBitcoinRate();

// Создайте элементы DOM для отображения названий и рейтингов самых популярных фильмов, полученных с помощью The Movie Database API. тоже просит ключ

// Создайте элементы DOM для отображения случайного изображения, полученного с NASA API и данных из всех полей объекта. и здесь ключ

// Создайте элементы DOM для отображения текста и источника случайных цитат, полученных с Kanye West API

async function fetchKanyeQuote() {
    try {
        const response = await fetch('https://api.kanye.rest/');
        const data = await response.json();
        displayQuote(data.quote);
    } catch (error) {
        console.error('Error fetching Kanye West quote:', error);
    }
}

function displayQuote(quoteText) {
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerHTML = '';

    const quoteElement = document.createElement('p');
    quoteElement.textContent = `"${quoteText}"`;
    quoteContainer.appendChild(quoteElement);

    const sourceElement = document.createElement('p');
    sourceElement.textContent = 'Source: Kanye West';
    quoteContainer.appendChild(sourceElement);
}