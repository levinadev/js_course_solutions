// Запуск из корня репозитория
// node 02_basics/06_functions/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.6 "Функции", шаг 7

Напишите функцию `double(n)`, которая возвращает число, умноженное на 2. Считайте число и выведите
результат функции.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    5

Пример вывода:

    10
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function double(n) {
  return n * 2;
}

const n = Number(prompt());
console.log(double(n));
