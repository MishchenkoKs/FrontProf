// callbackFn - callback function

// const arr = [1, 2, 3, 4, "hello", "world", "jejej", 9999];

// arr.forEach(function(item, index) {
//     console.log(`item: ${index} equal to ${item}`)
// })

// if (5 < 10) {
//   console.log("5 < 10");
// } else {
//   console.log("it is bigger");
// }
// 5 > 10 ? console.log("5 < 10") : console.log("it is bigger");

// const result = arr.map((item, index) => {
//   if (typeof item === "string") {
//     return item + " hello";
//   }
//   return item + 5;

//   // return typeof item === 'string' ? item + ' hello' : item + 5
// });

// console.log(result);

// const newResult = arr.map(item => typeof item === 'string' ? item + ' hello' : Math.pow(item, 3))

// const filteredElemMap = arr.map(item => typeof item === 'number')

// const filteredElem = arr.filter(item => typeof item === 'number')
// console.log(filteredElem)

// for(let i = 0; i < arr.length; i = i + 1) {
//     console.log(`2222 item ${i} equal to ${arr[i]}`)
// }

// function newFn(a, b) {
//     this.a = a
//     this.b = b
//     return a, b
// }

// const newObj = new newFn('yury', 'arakelove')
// const newPerson = new newFn('vasya', 'hello')
// console.log(newPerson)

// newFn()

// const newArrowFn = a => console.log(a)

// newArrowFn(5)

// 1. arguments
// 2. this - нельзя использовать в стрелочных функциях
// 3. синтаксис

// REDUCE

// const arrOfNumbers = [3 + 3 + 3 + 3 + 5 + 10]

// const reduceResult = arrOfNumbers.reduce((prevValue, currentValue) => {
//     return prevValue + currentValue
// }, 0)

// console.log(reduceResult)

// for(let i = 0; i < arrOfNumbers.length; i++) {
//     let initialValue = 0
//     initialValue += arrOfNumbers[i]
//     console.log(initialValue)
// }

// -----------------------------------------------------------------------
//1. Создать массив из строк и используя метод forEach вывести строки поочередно

// let strings = ["Hallo", "Hi", "Guten Tag", "Привет"]
// strings.forEach(function(item){
// console.log(item);
// })

// -----------------------------------------------------------



// 2. Создать массив из строк и используя метод forEach вывести строки поочередно с их номером (начиная с единицы). Пример выводимой строки “(1) Велосипед”.

// const stringArr = ['cat', 'dog', 'elefant', 'banan', 'apple', 'red']
// stringArr.forEach((str, index) => {
//     console.log(`(${index+1}) ${str}`)
// });

// -----------------------------------------------------------------
// 3. Создать массив из строк и используя метод forEach вывести только те строки, у которых индекс четный.

// const array = ['blue', 'red', 'yellow', 'green', 'violet']
// array.forEach(function(item,index){
//     if(index % 2 === 0){
//        console.log(item); 
//     }
// })

//------------------------------------------------------------------


// Разбор метода map. Как он работает. 
// 4. Используя метод map пройтись по массиву чисел и вернуть массив из квадратов этих чисел.
// const arrElem = [1, 2, 3, 4, 6, 38, 92, 7]

// const squares = arrElem.map(function(number){
//     return Math.pow(number, 2)
//     // console.log(elem ** 2)
// })
// console.log(squares);

//----------------------------------------------
// 5. Используя метод map пройтись по массиву из чисел и преобразовать все отрицательные числа в положительные.

// const num = [1, -3, -6, 12, -27, 31]
// const newNum = num.map(function(elem){
//     return Math.abs(elem)
// })
// console.log(newNum);

// ----------------------------------------------------
// 6. Используя метод filter сформировать массив из только положительных чисел

// const num = [1, -3, -6, 12, -27, 31]
// const filteredNum = num.filter(function(elem){
//     if (elem > 0){
//         console.log(elem);
//      }
//   })

//----------------------------------------------------------------
// 7. Используя метод filter сформировать массив из только четных чисел
// const num = [1, -2, 3, -4, 45, -85, 2, 18]
// const newFilter = num.filter(function (elem) {
//    if (elem % 2 === 0)
//       console.log(elem);
// })

// -------------------------------------------------------------------
// Преобразование массива объектов:
// Используйте map для преобразования массива объектов, например, если в каждом объекте есть свойство age, вы можете преобразовать его в массив из возрастов, а затем использовать filter, чтобы отфильтровать только те возрасты, которые больше определенного значения.

// const arrayNew = [
//     {name: "kseniia", age: 29},
//     {name: "mariia", age: 32},
//     {name: "lera", age: 25}
// ]
// const arrayAge = arrayNew
// .filter(function(elem){
//     return elem.age > 26
// })
// .map(function(elem){
//     return elem.name
// })

// console.log(arrayAge);

//-------------------------------------------


// Преобразование массива чисел в другие числа:
// Предположим, у вас есть массив чисел. Вы хотите преобразовать каждое число в новое число, умножив его на определенное значение, но только для чисел, которые больше нуля.

// const num = [1, -2, 3, -4, 45, -85, 2, 18]

// const newNum = num
//    .filter(function (nummer) {
//    if (nummer > 0) {
//       return nummer;
//    }
//    })

//    .map(function(nummer){
//       return nummer * 3
//    })

// console.log(newNum);

// ---------------------------------------------------

// Преобразование и фильтрация массива строк по длине:
// Предположим, у вас есть массив строк, и вы хотите создать новый массив, содержащий только те строки, длина которых превышает определенное значение. При этом вы хотите преобразовать каждую строку в верхний регистр.

const string = ['ukraine', 'poland', 'usa', 'hallo']

const newString = string
.filter(function(string){
    return string.length > 5
})
.map(function(string){
    return string.toUpperCase()
})
console.log(newString);|