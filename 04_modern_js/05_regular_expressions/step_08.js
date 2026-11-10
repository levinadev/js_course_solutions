// Запуск из корня репозитория
// node 04_modern_js/05_regular_expressions/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.5 "Регулярные выражения", шаг 8

Считайте строку с текстом. Выведите через пробел все целые числа из неё, а на следующей строке их
сумму. Если чисел нет, выведите одну строку `чисел нет`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Купил 3 яблока за 120 рублей и 2 груши

Пример вывода:

    3 120 2
    125
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const found = prompt().match(/\d+/g);
if (found === null) {
  console.log("чисел нет");
} else {
  console.log(found.join(" "));
  console.log(found.map(Number).reduce((sum, x) => sum + x, 0));
}
