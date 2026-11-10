// Запуск из корня репозитория
// node 02_basics/04_operators_and_type_conversion/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.4 "Операторы и преобразование типов", шаг 10

Считайте два целых числа, каждое с новой строки, и выведите их сумму.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2
    3

Пример вывода:

    5
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const a = Number(prompt());
const b = Number(prompt());
console.log(a + b);
