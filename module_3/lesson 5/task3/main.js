// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

let task = {
    title: "Модуль JS",
    description: "Разобрась с объектами и функциями",
    isCompleted: false
};

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications };
}

let updatedTask = cloneAndModify(task, { isCompleted: true, priority: "High" });

for (let key in updatedTask) {
    console.log(key + ": " + updatedTask[key]);
}