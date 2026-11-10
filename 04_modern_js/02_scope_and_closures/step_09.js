// Запуск из корня репозитория
// node 04_modern_js/02_scope_and_closures/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.2 "Область видимости и замыкания", шаг 9

Напишите функцию `makeFormatter(currency)`, которая возвращает функцию. Та принимает число и
возвращает строку из суммы с двумя знаками после точки, пробела и валюты. Считайте валюту, а на
следующей строке суммы через пробел. Выведите каждую сумму на отдельной строке, оформив её одной и
той же созданной функцией.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    руб.
    10 2.5 1000

Пример вывода:

    10.00 руб.
    2.50 руб.
    1000.00 руб.
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const makeFormatter = (currency) => (amount) => `${amount.toFixed(2)} ${currency}`;

const format = makeFormatter(prompt());
for (const x of prompt().split(" ").map(Number)) {
  console.log(format(x));
}
