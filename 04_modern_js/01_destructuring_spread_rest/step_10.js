// Запуск из корня репозитория
// node 04_modern_js/01_destructuring_spread_rest/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.1 "Деструктуризация, spread и rest", шаг 10

Считайте строку с целыми числами через пробел. Выведите наибольшее число, а на следующей строке
наименьшее. Используйте `Math.max()`, `Math.min()` и spread.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3 9 1

Пример вывода:

    9
    1
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const nums = prompt().split(" ").map(Number);
console.log(Math.max(...nums));
console.log(Math.min(...nums));
