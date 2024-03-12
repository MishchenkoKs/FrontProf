// const arr = [1, 2, 3, 'hello', 'apple', 'cat']
// const arr2 = [4, 5, 6, 8, 'tea', 'sociable', 'bicucle']
// function arrFilter(randomArr) {
//     return randomArr.filter(function (elem) {
//         return typeof elem === 'number'
//     })
// }


// console.log(arrFilter(arr));
// console.log(arrFilter(arr2));

// const arr1 = [-4, 2, 5, -6, 'dog', 'rabbit', 'like']
// function arrFilter(elem) {
//     return elem
//         .filter((item) => typeof item === 'number')
//         .filter((item) => item > 0)
//         .map((item) => item ** 2)
// }

// console.log(arrFilter(arr1));

// function multiply(a, b) {
//     return a * b;
// }
// console.log(multiply(3, 5));

// const arr3 = [2, -8, 6, 13, -5, 'tyuifrd', 'ufisdjf']
// function example(element){
//     return element
//     .filter(function(item){
//         return typeof item === 'number' && item > 0
//     })

//     .reduce(function(a,b){
//         return a + b 
//     })

// }
// console.log(example(arr3));

// В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны вернуть наибольшее и наименьшее число.
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// function highAndLow(numbers){
//   // ...
// }

// function highAndLow(numbers){
//     const arr = numbers.split(" ");
//     const max = Math.max(...arr);
//     const min = Math.min(...arr);

//     return `${max} ${min}`

// }
// console.log(highAndLow(" 1 2 3 4 5"));

// const myName = 'Kseniia'

// // localStorage.setItem(myName)
// localStorage.setItem('userName', myName)

// const input = document.querySelector('.newInput')
// const form = document.querySelector('.form')
// form.addEventListener('submit', function(){
//     const inputValue1 = input.value
//     localStorage.setItem('inputValue', inputValue1)
//     input.value = ''
// })
// console.log(input);

const header
const box = document.querySelector('.box')
const boxItem = document.createElement('div')