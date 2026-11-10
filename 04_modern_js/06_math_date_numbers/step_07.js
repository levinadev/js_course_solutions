// Запуск из корня репозитория
// node 04_modern_js/06_math_date_numbers/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.6 "Math, Date и числа", шаг 7

Считайте дробное число. Выведите на трёх строках результаты `Math.round()`, `Math.floor()` и
`Math.ceil()` для этого числа.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2.5

Пример вывода:

    3
    2
    3
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const x = Number(prompt());
console.log(Math.round(x));
console.log(Math.floor(x));
console.log(Math.ceil(x));
