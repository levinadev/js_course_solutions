// Запуск из корня репозитория
// node 04_modern_js/03_errors_and_exceptions/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.3 "Ошибки и исключения", шаг 8

Напишите функцию `parsePrice(str)`, которая превращает строку в число. Если получился `NaN`, она
бросает `TypeError` с текстом `Это не число`. Если число меньше нуля, она бросает `RangeError` с
текстом `Цена не может быть отрицательной`. Считайте строку, вызовите функцию внутри `try...catch` и
выведите либо `Цена: ЧИСЛО`, либо имя ошибки, двоеточие, пробел и текст ошибки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    199

Пример вывода:

    Цена: 199
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function parsePrice(str) {
  const value = Number(str);
  if (Number.isNaN(value)) {
    throw new TypeError("Это не число");
  }
  if (value < 0) {
    throw new RangeError("Цена не может быть отрицательной");
  }
  return value;
}

try {
  console.log(`Цена: ${parsePrice(prompt())}`);
} catch (error) {
  console.log(`${error.name}: ${error.message}`);
}
