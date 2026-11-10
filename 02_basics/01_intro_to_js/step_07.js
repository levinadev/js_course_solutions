// Запуск из корня репозитория
// node 02_basics/01_intro_to_js/step_07.js

/*
Урок 2.1 "Знакомство с JavaScript", шаг 7

Выведите на экран фразу `Hello, JavaScript!`

Пример ввода:



Пример вывода:

    Hello, JavaScript!
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
console.log("Hello, JavaScript!");
