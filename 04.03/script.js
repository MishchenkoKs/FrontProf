//Написать функцию, которая принимает параметром описание кошки ( имя, возраст, цвет и вес)
//В консоли описать вашу кошку. 
//Пример: «У меня есть кошка по кличке Вася, ему 10 лет, он рыжий и толстый (11кг)»
//Усложняем функцию: делаем проверку. Если коту больше 5 лет и его цвет не рыжий, то в консоль выводим его описание, в противном случае, в консоль выводим: ему 5 и он рыжий
// function cat(Name, Age, Color, Wight) {
//     if (Age > 5 && Color !='orange') {
//         console.log(`У меня есть кошка по кличке ${Name}, ей ${Age} месяцев, она ${Color} и весит (${Wight})`);
//     }    else{
//         console.log(`ему ${Age} и он ${Color}`);
//     }
// }
    
// cat('Плюшка', 10, 'белая', 3)

//Напишите функцию printNumbers, которая принимает один параметр n - положительное целое число. Функция должна вывести в консоль все числа от 1 до n включительно.

// function printNumbers(n) {
   
//     for(let i = 1; i <= n; n++) {
//     console.log(i);
// }
// }
// printNumbers(5)
//Функция принимает параметром массив, с помощью цикла обработать и вывести в консоль все элементы массива

// function printNumbers(n) {
   
//         for(let i = 0; i < arr.length; n++) {
//         console.log(arr[i]);
//     }
// }
// printNumbers(3, 5, 7, 8)

//Теперь необходимо вывести все строчные элементы массива . Только строчные

// const arr = [1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp']

//function findStringValuess(arr) {
   // for (let i = 0; i < arr.length; i++) {
        //if (typeof arr[i] === 'string') {
        //    console.log(arr[i]);
    //    }
   // }
//}

//findStringValuess([1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp'])

////forEach

//const newArrFn = (item) => {
  //  console.log(item);
 // };
  
  // result.forEach(function(item) {
  // console.log(item)
  // })
  
 // function newFn(item) {
 //   console.log(item);
 // }
  
  //map
  
 // const newMapResult = result.map(function(item){
  //    if(typeof item === 'string') {
   //       return item + ' HELLO WORLD'
  //    } else {
   //       return item * 100
  //    }
//  })
  
//  console.log(newMapResult)
  
  //Callback function - функция обратного вызова, которая используется в качестве аргумента другой функции.
  // console.log(result)
  
 // function randomFn(a, b) {
  //  return {
  //    a: a,
  //    b: b,
 //   };
 // }
  
  // const newResult = randomFn(5, 'hello')
  
  // console.log(newResult)
  //1. Напишите код, который принимает массив чисел и использует метод forEach, чтобы вывести каждый элемент массива в консоль.

// const newArr =  [1, 2, 3, 5, 7, 'hekki', 'sdv', 'hello', 'amao', 'olllllp'];
//  newArr.forEach (function(item){
//     console.log(item);
//  })
  
//2. Напишите код, который принимает массив целых чисел и выводит сообщение о том, является ли каждое число четным или нечетным.
// newArr.forEach(function(item) {
//     if (item %2 == 0){
//         console.log(item);
//     }

//     })

//Напишите программу, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент удвоен.


// newArr.map(function(item){
//     console.log(item*2);
// })

//Напишите программу, которая принимает массив строк и возвращает новый массив, в котором каждая строка преобразована в верхний регистр.


// let upperStringArr = ["hjhj", "jkjk", "mlmk"].map(item=> item.toUpperCase());
// console.log(upperStringArr);

//Напишите программу, которая принимает массив объектов дат в формате строк (например, ["2023-01-15", "2024-03-04", "2025-12-31"]) и возвращает новый массив, в котором каждая дата преобразована в формат "День.Месяц.Год".
const newArr = ["2023-01-15", "2024-03-04", "2025-12-31"].map(item =>  item.split("-").join("."))

 console.log(newArr);