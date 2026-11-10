// Запуск из корня репозитория
// node 02_basics/07_functions/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.7 "Функции", шаг 9

Напишите стрелочную функцию `bmi(weight, height)`, которая возвращает индекс массы тела. Это вес в
килограммах, делённый на квадрат роста в метрах. Считайте вес (кг) и рост (см), каждое с новой
строки, и выведите результат с одним знаком после точки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    70
    175

Пример вывода:

    22.9
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const bmi = (weight, height) => weight / (height / 100) ** 2;
const weight = Number(prompt());
const height = Number(prompt());
console.log(bmi(weight, height).toFixed(1));
