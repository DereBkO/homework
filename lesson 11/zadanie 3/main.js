let users = [
    {name: 'Соня', isAdmin: false},
    {name: 'Никита', isAdmin: true},
    {name: 'Настя', isAdmin: false},
    {name: 'Богдан', isAdmin: false},
    {name: 'Юля', isAdmin: true},
];

let simpleUsersCount = 0;

for (let i = 0; i < users.length; i++) {
    if (!users[i].isAdmin) {
        simpleUsersCount = simpleUsersCount + 1;
    }
}

console.log('Количество простых пользователей: ' + simpleUsersCount);