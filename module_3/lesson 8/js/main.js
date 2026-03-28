"use strict";

const todoKeys = {
  id: "id",
  text: "text",
  is_completed: "is_completed",
};

const todos = [];

const errTodoNotFound = todoId => `Todo with id ${todoId} not found`;

const getNewTodoId = todos =>
  todos.reduce((maxId, todo) => Math.max(maxId, todo[todoKeys.id]), 0) + 1;

const createTodo = (todos, text) => {
  const newTodo = {
    [todoKeys.id]: getNewTodoId(todos),
    [todoKeys.text]: text,
    [todoKeys.is_completed]: false,
  };
  todos.push(newTodo);
  return newTodo;
};

const completeTodoById = (todos, todoId) => {
  const todo = todos.find(todo => todo[todoKeys.id] === todoId);

  if (!todo) {
    console.error(errTodoNotFound(todoId));
    return null;
  }
  todo[todoKeys.is_completed] = !todo[todoKeys.is_completed];
  return todo;
};

const deleteTodoById = (todos, todoId) => {
  const todoIndex = todos.findIndex(todo => todo[todoKeys.id] === todoId);
  if (todoIndex === -1) {
    console.error(errTodoNotFound(todoId));
    return todos;
  }
  todos.splice(todoIndex, 1);
  return todos;
};

// При помощи метода querySelector получаем элементы .form, .input и .todos
// Создаем функцию createTodoElement(text), которая будет создавать todo в виде разметки
// Создаем функцию handleCreateTodo(todos, text), которая будет вызывать createTodo и createTodoElement


const form = document.querySelector(".form");
const input = document.querySelector(".input");
const todosList = document.querySelector(".todos");

const createTodoElement = (todo) => {
  const li = document.createElement("li");

  li.classList.add("todo");
  li.dataset.id = todo[todoKeys.id];

  if (todo[todoKeys.is_completed]) {
    li.classList.add("completed");
  }

  li.innerHTML = `
    <div class="todo-text">${todo[todoKeys.text]}</div>
    <div class="todo-actions">
      <button class="button-complete button">✔</button>
      <button class="button-delete button">✖</button>
    </div>
  `;

  return li;
};

const handleCreateTodo = (todos, text) => {
  if (!text.trim()) return;

  const newTodo = createTodo(todos, text);
  const todoElement = createTodoElement(newTodo);

  todosList.append(todoElement);
  input.value = "";
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleCreateTodo(todos, input.value);
});
