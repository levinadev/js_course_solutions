// Запуск из корня репозитория
// node 02_basics/03_variables_and_types/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.3 "Переменные и типы данных", шаг 7

Считайте строку и выведите две строки. В первой саму строку, во второй её тип, который даёт
`typeof`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    42

Пример вывода:

    42
    string
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const value = prompt();
console.log(value);
console.log(typeof value);
