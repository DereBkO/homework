// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

function findFirstEven (start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            return i;
        }
    }
    return "Чётных чисел нет";
}

const startNumber = +prompt("Первое число диапозона");
const endNumber = +prompt("Последнее число диапозона");

const result = findFirstEven(startNumber, endNumber);
alert(result);