// *Задача 3.
// Выведите в консоль шахматную доску размером 8x8, где символы чередуются (например, # и пробел). Начинайте с # в первой ячейке первой строки.

for (let i = 0; i < 8; i++) {
    let row = "";
    for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
            row += "■ ";
        } else {
            row += "□ ";
        }
    }
    console.log(row);
}
console.log("");

for (let k = 1; k <= 5; k++) {
    let space = "";
    let star = "";
    for (let o = 0; o < 5 - k; o++) {
        space += " ";
    }
    for (let o = 0; o < 2 * k - 1; o++) {
        star += "*";
    }
    console.log(space + star);
}

console.log("    |    ");