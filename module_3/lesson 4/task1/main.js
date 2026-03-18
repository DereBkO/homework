// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

function calculateFinalPrice(price, percent, rate) {
    const priceDiscount = price - (price * (percent / 100));

    const finalPrice = priceDiscount + (priceDiscount * rate);

    return finalPrice;
}

const bazaPrice = +prompt("Базовая цена товара");
const procSkidka = +prompt("Процент скидки");
const nalogStavka = +prompt("Налоговая ставка");

const result = calculateFinalPrice(bazaPrice, procSkidka, nalogStavka);
alert(result);