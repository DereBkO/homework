const aboutMe = {
    name: 'Алексей',
    age: 23,
    gender: 'мужской',
    isMarried: false,
    hobbies: ['Веб-разработка', ' Видеоигры'],

    hello() {
        console.log(`Привет! Меня зовут ${this.name}. Мне ${this.age}. Пол ${this.gender}. Увлекаюсь ${this.hobbies}`);
    }
};

console.log(aboutMe);

aboutMe.hello();