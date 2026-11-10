// Запуск из корня репозитория
// node 04_modern_js/06_math_date_numbers/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.6 "Math, Date и числа", шаг 8

Считайте дату в виде `ГГГГ-ММ-ДД` и выведите название её месяца по-русски маленькими буквами,
например `октябрь`. Используйте `Date` и `getMonth()`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2026-10-10

Пример вывода:

    октябрь
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const MONTHS = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
const [year, month, day] = prompt().split("-").map(Number);
const d = new Date(year, month - 1, day);
console.log(MONTHS[d.getMonth()]);
