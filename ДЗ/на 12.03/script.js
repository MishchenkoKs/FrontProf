// Напишите функцию, которая использует forEach для умножения каждого элемента массива на 2 и вывода результата в консоль.

const arr1 = [2, 3, 5, 7, 4, 8, 1]
function elemX2(array) {
    array.forEach(element => {
        console.log(element * 2);
    });
}
elemX2(arr1)

// Напишите функцию, которая использует forEach, чтобы складывать все элементы массива и возвращать сумму.

function elemSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element
    })
    console.log(sum);
}
elemSum(arr1)

// Дан массив строк. Используйте forEach, чтобы преобразовать каждую строку в верхний регистр и сохранить изменения в том же массиве. 

const arr2 = ['apple', 'pineapple', 'pineappleapplepen']
function hightRegistr(array) {
    array.forEach(function (element, index, array) {
        array[index] = element.toUpperCase()
    })
    console.log(array);
}
hightRegistr(arr2)

//На map Дан массив чисел. Создайте новый массив, в котором будут лежать квадраты каждого числа из исходного массива.

const arr3 = [4, 2, 9, 8, 16, 35, 11]
function squareElem(array) {
    const newArr = array.map(function (element) {
        return Math.pow(element, 2)
    })
    console.log(newArr);
}
squareElem(arr3)

// Дан массив объектов с информацией о товарах. Необходимо создать новый массив, содержащий только имена товаров.

const products = [
    {
        name: 'мантия',
        price: 200
    },

    {
        name: 'котел',
        price: 150
    },

    {
        name: 'волшебная палочка',
        price: 400
    },

    {
        name: 'сова',
        price: 350
    }
]
function listProducts(array) {
    const arrName = array.map(function (elem) {
        return elem.name;
    })
    console.log(arrName);
}
listProducts(products)

// Дан массив чисел. Создайте новый массив, в котором будут только отрицательные числа из исходного массива.

const arr4 = [1, -4, 8, 8, 2, -5, 6, -25]
function negativeValue(array) {
    const newArrNegative = array
        .map(function (elem) {
            if (elem < 0) {
                return elem
            }
        })
        .filter(function (elem) {
            return elem !== undefined
        })
    console.log(newArrNegative);
}
negativeValue(arr4)

