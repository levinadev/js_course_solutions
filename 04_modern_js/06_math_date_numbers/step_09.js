// Запуск из корня репозитория
// node 04_modern_js/06_math_date_numbers/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.6 "Math, Date и числа", шаг 9

Считайте две даты в виде `ГГГГ-ММ-ДД`, каждую с новой строки. Выведите, сколько дней между ними, без
минуса. На следующей строке выведите день недели второй даты по-русски маленькими буквами, например
`суббота`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2026-10-10
    2026-12-31

Пример вывода:

    82
    четверг
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const DAYS = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

function toDate(s) {
  const [year, month, day] = s.split("-").map(Number);
  return new Date(year, month - 1, day);
}

const a = toDate(prompt());
const b = toDate(prompt());
console.log(Math.round(Math.abs(b - a) / 86400000));
console.log(DAYS[b.getDay()]);
