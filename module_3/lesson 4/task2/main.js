// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

function checkAccess(username, password) {
    if (username === "admin" && password === "123456") {
        return "Доступ разрешен";
    } else {
        return "Доступ запрещен";
    }
}

const login = prompt("Логин");
const pass = +prompt("Пароль");

const result = checkAccess(login, pass);
alert(result);