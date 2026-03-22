// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

function callAllMethods(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'function') {
            obj[key]();
        }
    }
}

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод',
};

callAllMethods(myObject);