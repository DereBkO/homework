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

const updateTodoText = (todos, todoId, newText) => {
	const todo = todos.find(t => t[todoKeys.id] === todoId);
	if (!todo) return console.error(errTodoNotFound(todoId));

	todo[todoKeys.text] = newText;
	return todo;
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

const clearCompletedTodos = (todos) => {
	let i = todos.length;
	while (i--) {
		if (todos[i][todoKeys.is_completed]) todos.splice(i, 1);
	}
	return todos;
};

const getTodoStats = (todos) => ({
	total: todos.length,
	completed: todos.filter(t => t[todoKeys.is_completed]).length,
	active: todos.filter(t => !t[todoKeys.is_completed]).length,
});
