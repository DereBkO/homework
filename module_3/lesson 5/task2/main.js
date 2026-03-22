// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

console.log(isEmpty({}));
console.log(isEmpty({ name: "Иван" }));
