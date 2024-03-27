// // Создайте массив объектов, каждый из которых представляет собой информацию о человеке (имя, возраст и т. д.). Используйте метод map, чтобы создать новый массив, содержащий только имена всех людей.


// const arrInfo = [
//     {
//         name: 'lisa',
//         age: 21,
//     },
//     {
//         name: 'kseniia',
//         age: 29,
//     },
//     {
//         name: 'yuri',
//         age: 26,
//     }
// ]

// function info(array) {
//     const newArray = array.map((elem) => {
//         return elem.name;
//     });
//     console.log(newArray);
// }
// info(arrInfo)

// // Создайте массив чисел и используйте метод map, чтобы преобразовать каждое число в строку.

// const arrNumber = [2, 5, 3, 7, 13, 867]

// function transform(array) {
//     const newNumber = array.map((elem) => {
//         return String(elem)
//     });
//     console.log(newNumber);
// }
// transform(arrNumber)


// // Создайте массив строк, представляющих даты, и используйте метод map, чтобы преобразовать каждую строку в объект Date.

// const arrString = ['03-27-2024', '02-06-1995', '06-19-2002'];
// function stringTransform(array) {
//     const newDate = array.map((elem) => {
//         return new Date(elem)
//     })
//     console.log(newDate);
// }
// stringTransform(arrString)


// // Создайте массив чисел и используйте метод map, чтобы создать новый массив, содержащий квадраты каждого числа.

// const number = [9, 5, 3, 7, 9, 2, 6, 1234, 87654];
// function square(array){
//     const newSquare = array.map((elem) => {
//         // return number**2
//         return Math.pow(elem, 2);
//     })
//     console.log(newSquare);
// }
// square(number)

// // Создайте массив слов и используйте метод map, чтобы создать новый массив, содержащий длины каждого слова.

// const words = ['oh', 'my', 'god', 'javaScript'];
// function length(array){
//     const newLength = array.map((elem) => {
//         return elem.length;
//     })
//     console.log(newLength);
// }
// length(words)


// ForEach:
// Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль каждый элемент массива, умноженный на 2.

// const value = [7, 2, 9, 13, 26, 92];
// function multiply(array) {
//     array.forEach(element => {
//         console.log(element * 2);
//     });
// }
// multiply(value)


// // Создайте массив строк и используйте метод forEach, чтобы вывести в консоль каждую строку в верхнем регистре.

// const stringArray = ['cat', 'dog', 'sociable', 'bicycle'];
// function bigLetter(array) {
//     array.forEach(elem => {
//         console.log(elem.toUpperCase());
//     })
// }
// bigLetter(stringArray)



// // Создайте массив объектов и используйте метод forEach, чтобы вывести в консоль значения определенного свойства каждого объекта.

// const arrObg = [
//     {
//         animal: 'cat',
//         color: 'white',
//     },
//     {
//         animal: 'dog',
//         color: 'brown',
//     },
//     {
//         animal: 'elefant',
//         color: 'gray',
//     }
// ]

// function feature(array) {
//     array.forEach(elem => {
//         console.log(elem.color);
//     })
// }
// feature(arrObg)


// // Создайте массив чисел и используйте метод forEach, чтобы вывести в консоль только нечетные числа.

// const number2 = [3, 7, 9, 1, 987, 22, 61, 86, 18];
// function oddNumber(array) {
//     array.forEach(elem => {
//         if (elem % 2 !== 0) {
//             console.log(elem);
//         }
//     })
// }
// oddNumber(number2)

// // Создайте массив слов и используйте метод forEach, чтобы вывести в консоль каждое слово, у которого длина больше 5 символов.

// const arrWords = ['tea', 'comfortabele',  'rozpakoyka', 'milk'];
// function bigLength(array){
//     array.forEach(elem => {
//         if(elem.length >= 5){
//             console.log(elem);
//         }
//     })
// }
// bigLength(arrWords)



// Filter:
// Создайте массив чисел и используйте метод filter, чтобы отфильтровать только положительные числа.

// const number3 = [-12345, 98765, 3453, -6, 18, 54];
// function positiveNumbers(array){
//     const newPositive = array.filter(elem => {
//         if(elem >0){
//             return elem;
//         }
//     })
//     console.log(newPositive);
// }
// positiveNumbers(number3)


// // Создайте массив строк и используйте метод filter, чтобы отфильтровать только строки, содержащие более одного слова.

// const stringFilter = ['avada kedavra', 'javascript', 'hello world', 'lol'];
// function moreOneWords(array){
//     const wordsFilter = array.filter(elem => {
//         return elem.split(' ').length > 1;
//     })
//     console.log(wordsFilter);
// }
// moreOneWords(stringFilter)

// // Создайте массив объектов, представляющих людей, и используйте метод filter, чтобы отфильтровать только совершеннолетних.

// const arrPeople = [
//     {
//         name: 'harry',
//         age: 11,
//     },
//     {
//         name: 'ron',
//         age: 11,
//     },
//     {
//         name: 'albus percival wulfric brian dumbledore',
//         age: 110,
//     },
//     {
//         name: ' rubeus hugrid',
//         age: 56,
//     },
// ]

// function adult(array){
//     const bigAge = array.filter(elem => {
//         if(elem.age > 18){
//             return elem;
//         }
//     })
//     console.log(bigAge);
// }
// adult(arrPeople)

// // Создайте массив чисел и используйте метод filter, чтобы отфильтровать только числа, которые делятся на 3 без остатка.

// const numbersFilter = [9, 14, 21, 67, 234, 782,  63];
// function three(array){
//     const threeNumbers = array.filter(elem =>{
//         if(elem %3 ===0){
//             return elem;
//         }
//     })
//     console.log(threeNumbers);
// }
// three(numbersFilter)


// // Создайте массив слов и используйте метод filter, чтобы отфильтровать только слова, начинающиеся с определенной буквы.

// const arrFilter = ['apple', 'rainbow', 'flower', 'turtle'];
// function symbol(array, letter){
//     const symbolFilter = array.filter(elem => {
//         return elem.startsWith(letter);
//     })
//     console.log(symbolFilter);
// }
// symbol(arrFilter, 'r')




// Основное задание: сделать фильтрацию нашего приложения по названию товара и по количеству товара 

function productLocalStorage(products) {
    
    localStorage.setItem('products',JSON.stringify(products));
}

function getFromLocal(){
    const localProduct = localStorage.getItem('products')
    if (localProduct) {
        return JSON.parse(localProduct)
    }else{
        return []
    }
}

let products;

if (localStorage.getItem('products')){
    products = getFromLocal()
} else{
    products = []
}

function addProduct(name, price, count) {
    const productItem = {
        id: Date.now(),
        name: name,
        price: price,
        count: count,
        show: true
    }
    products.push(productItem);
    productLocalStorage(products);
    rerender();

}

function rerender() {
    const productList = document.querySelector('#productList')
    productList.innerHTML = ''
    products.map((item) => {
        if (item.show) {
            const listItem = document.createElement('li')
            listItem.textContent = `ID: ${item.id}, ${item.name} - ${item.price} $, Количество: ${item.count}`

            productList.append(listItem)
        }
    })
}

function filterProductByPrice(itemPrice) {
    products.filter((item) => {
        item.show = item.price <= itemPrice
    })
    rerender()
}

const productForm = document.querySelector('#productForm')
productForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.querySelector('#productName').value
    const productPrice = document.querySelector('#productPrice').value
    const productCount = document.querySelector('#productCount').value

    if(productName && productPrice && productCount > 0){
        addProduct(productName, productPrice, productCount)

        document.querySelector('#productName').value = '';
        document.querySelector('#productPrice').value = '';
        document.querySelector('#productCount').value = '';
    }else{
        alert('Введите корректные данные')
    }
});
const filterPriceInput = document.querySelector('#filterByPrice');
filterPriceInput.addEventListener('input', function(){
    console.log('it works');
    const filterPrice = parseFloat(filterPriceInput.value);
    if (!isNaN(filterPrice)) {
        filterProductByPrice(filterPrice)
    }else{
        rerender()
    }
})

function filterProductByName(elemName) {
    products.map((elem)=>{
        elem.show = elem.name == elemName
    })
    rerender()
}

const filterNameInput = document.querySelector('#filterByName')
filterNameInput.addEventListener('input', function() {
    const filteredName = filterNameInput.value
    if (filteredName) {
        filterProductByName(filteredName)
    }else{
        rerender()
    }

}) 
function filterProductByCount(elemCount) {
    products.map((elem)=>{
        elem.show = elem.count == elemCount
    })
    rerender()
}

const filterCountInput = document.querySelector('#filterByCount')
filterCountInput.addEventListener('input', function() {
    const filteredCount = parseFloat(filterCountInput.value)
    if (!isNaN(filteredCount)) {
        filterProductByCount(filteredCount)
    }else{
        rerender()
    }
})
 rerender()


 