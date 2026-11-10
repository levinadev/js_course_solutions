// Запуск из корня репозитория
// node 04_modern_js/01_destructuring_spread_rest/step_12.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.1 "Деструктуризация, spread и rest", шаг 12

Напишите функцию `stats(...nums)`, которая принимает любое количество чисел и возвращает объект `{
min, max, avg }` с наименьшим, наибольшим и средним значением. Считайте числа через пробел, вызовите
функцию, передав их через spread, и выведите строку `мин: A, макс: B, среднее: C`. Среднее выведите
с одним знаком после точки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    4 8 15 16 23 42

Пример вывода:

    мин: 4, макс: 42, среднее: 18.0
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function stats(...nums) {
  const sum = nums.reduce((total, x) => total + x, 0);
  return { min: Math.min(...nums), max: Math.max(...nums), avg: sum / nums.length };
}

const { min, max, avg } = stats(...prompt().split(" ").map(Number));
console.log(`мин: ${min}, макс: ${max}, среднее: ${avg.toFixed(1)}`);
