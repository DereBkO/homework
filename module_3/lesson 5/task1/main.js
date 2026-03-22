// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
	name: "Алексей",
	age: 23,
	years: "года.",
	skill: "Мои скиллы:",
	skills: [
		"сисадмин",
		"web-разработчик",
		"заводчанин."
	],
};

console.log(person.name, person.age, person.years, person.skill, person.skills.join(", "));
