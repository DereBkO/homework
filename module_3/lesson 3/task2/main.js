// Задача 2.
// С помощью цикла for вычислите факториал числа (произведение всех чисел от 1 до заданного числа). Используйте prompt для получение начального значения.

let number = +prompt("Введите число");
let factorial = 1;

for (let i = 2; i <= number; i++) {
    factorial = factorial * i;
}

alert(`Факториал числа - ${factorial}`);