// Напишите программу, которая использует метод forEach, чтобы вывести каждый элемент массива на новой строке.
const arr = [3, 6, 1, 9, 56, 7]
function newString(array) {
    array.forEach(element => {
        console.log(element);
    });
}
newString(arr)


// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод forEach, чтобы увеличить каждый элемент массива на 1.

const arr1 = [5, 9, 2, 11, 916, 57, 28]
function elemPlusOne(array) {
    array.forEach((element, index, array) => {
        array[index] = element + 1
    });
    console.log(array);
}
elemPlusOne(arr1)


// Напишите программу, которая использует метод forEach, чтобы найти сумму всех элементов в массиве.
const arr2 = [6, 23, 14, 704, 26]

function elemSum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element
    })
    console.log(sum);
}
elemSum(arr2)

// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод forEach, чтобы преобразовать каждую строку в верхний регистр.

const arr3 = ['Harry', 'Ron', 'Hermine']
function hightRegistr(array) {
    array.forEach(function (element, index, array) {
        array[index] = element.toUpperCase()
    })
    console.log(array);
}
hightRegistr(arr3)

// Напишите программу, которая использует метод forEach, чтобы проверить, содержит ли массив заданное значение.

const arr4 = [4, 12, 35, 44, 87, 13];

function checkValue(array, value) {
    let found = false;
    array.forEach(function (element) {
        if (element === value) {
            found = true;
        }
    });

    if (found) {
        console.log('true');
    } else {
        console.log('false');
    }
}

checkValue(arr4, 44);


// map:

// Напишите программу, которая использует метод map, чтобы умножить каждый элемент массива на 2.
const arr5 = [7, 2, 32, 11, 96, 67, 9]

function valueX2(array) {

    const value = array.map(element => {
        return element * 2;
    });
    console.log(value);
}
valueX2(arr5)


// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод map, чтобы добавить к каждой строке восклицательный знак.
const arrString = ['Avada Kedavra', 'Imperius', 'Cruciatus']

function bigPoint(array) {
    const newArray = array.map(function (elem, i, arr) {
        return arr[i] = elem + '!'
    })
    console.log(newArray);
}
bigPoint(arrString)

// Напишите программу, которая использует метод map, чтобы извлечь имена из массива объектов и создать новый массив только из имен.

const arrName = [
    {
        name: 'Kseniia',
        city: 'Berlin'
    },

    {
        name: 'Lisa',
        city: 'Luckenwalde'
    },

    {
        name: 'Yury',
        city: 'Brasil'
    }
]

function listName(array) {
    const arrNewName = array.map(function (elem) {
        return elem.name;
    })
    console.log(arrNewName);
}
listName(arrName)


// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод map, чтобы вернуть новый массив, содержащий квадраты этих чисел.

const arr6 = [15, 6, 4, 2, 11, 41, 19]
function squareElem(array) {
    const newArr = array.map(function (element) {
        return Math.pow(element, 2)
    })
    console.log(newArr);
}
squareElem(arr6)

// Напишите программу, которая использует метод map, чтобы преобразовать массив строк в массив чисел (например, массив строк '1', '2', '3' должен быть преобразован в массив чисел 1, 2, 3).

const arrayString = ['1', '2', '3', '4', '5']

function anotherString(array) {
    const anotherArr = array.map(function (element) {
        return Number(element);
    })
    console.log(anotherArr);
}
anotherString(arrayString)

// filter:

// Напишите программу, которая использует метод filter, чтобы отфильтровать все четные числа из массива.

const arr7 = [3, 4, 6, 7, 19, 22, 16, 91]
function evenValue(array) {
    const newEven = array.filter(function (element) {
        if (element % 2 === 0) {
            return element;
        }
    })
    console.log(newEven);
}
evenValue(arr7)


// Создайте функцию, которая принимает массив строк в качестве аргумента и использует метод filter, чтобы вернуть массив строк, содержащих только букву 'a'.

const arr8 = ['Ukraine', 'Germany', 'Brasil', 'Polen', 'UK', 'Belgium']
function symbulA(array) {
    const onlySymbul = array.filter(function (element) {
        return element.includes('a');
    })
    console.log(onlySymbul);
}
symbulA(arr8)




// Напишите программу, которая использует метод filter, чтобы отфильтровать только положительные числа из массива.

const arr9 = [4, -7, -13, -46, 14, 52]
function positiveValue(array) {
    const newPositive = array.filter(function (element) {
        if (element > 0) {
            return element;
        }
    })
    console.log(newPositive);
}
positiveValue(arr9)


// Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод filter, чтобы вернуть массив объектов, у которых значение определенного свойства больше заданного порога.

const arr10 = [
    {
        product: 'tea',
        price: 13
    },

    {
        product: 'milk',
        price: 10
    },

    {
        product: 'bread',
        price: 7
    },

    {
        product: 'eggs',
        price: 18
    }
]

function biggerPrice(array) {
    const newBigger = array.filter(function (element) {
        if (element.price >= 12) {
            return element;
        }
    })
    console.log(newBigger);
}
biggerPrice(arr10)



// Напишите программу, которая использует метод filter, чтобы отфильтровать строки, содержащие не менее 5 символов.

const arr11 = ['akcio', 'nox', 'reducto', 'lumos', 'ron']
function fiveSymbol(array) {
    const newFive = array.filter(function (element) {
        if (element.length >= 5) {
            return element;
        }
    })
    console.log(newFive);
}
fiveSymbol(arr11)


// reduce:

// Напишите программу, которая использует метод reduce, чтобы найти сумму всех элементов массива.

const arr12 = [6, 12, 36, 14, 78, 245]
function sumElem(array) {
    const newSum = array.reduce(function (prev, current) {
        return prev + current;
    })
    console.log(newSum);
}
sumElem(arr12)



// Создайте функцию, которая принимает массив чисел в качестве аргумента и использует метод reduce, чтобы найти наименьшее число в массиве.

const arr13 = [42, 567, 234, 86, 14, 19, -6]
function minimalValue(array) {
    const newMinimal = array.reduce(function (elem, element) {
        return Math.min(elem, element)
    })
    console.log(newMinimal);
}
minimalValue(arr13)

// Напишите программу, которая использует метод reduce, чтобы объединить все элементы массива строк в одну строку.

const arr14 = ['Albus', 'Percival', 'Wulfric', 'Brian', 'Dumbledore']

function sumStrings(array) {
    const newSumStrings = array.reduce(function (element, elem) {
        return element + elem;
    })
    console.log(newSumStrings);
}
sumStrings(arr14)

// Создайте функцию, которая принимает массив объектов в качестве аргумента и использует метод reduce, чтобы вычислить средний возраст всех объектов в массиве.

const arr15 = [
    {
        name: 'Harry',
        age: 17
    },

    {
        name: 'Sirius',
        age: 37
    },

    {
        name: 'Draco Malfoy',
        age: 18
    },

    {
        name: 'Dobby',
        age: 118
    }
]

function sumAge(array) {
    const newSumAge = array.reduce(function (element, persone) {
        return element + persone.age
    }, 0)
    const foundAge = newSumAge / array.length
    console.log(foundAge);
}
sumAge(arr15)


// Напишите программу, которая использует метод reduce, чтобы найти наиболее часто встречающийся элемент в массиве строк.

const arr16 = ['Зельеварение', 'Защита от темных искусств', 'Трансфигурация', 'Квиддич', 'Зельеварение']
function repitElem(array) {
    const newRepit = array.reduce(function (element, elem) {
        element[elem] = (element[elem] || 0) + 1;
        return element;
    }, {})
    console.log(newRepit);
}
repitElem(arr16)