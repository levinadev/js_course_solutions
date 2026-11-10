// Запуск из корня репозитория
// node 03_arrays_objects_loops/06_json/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.6 "JSON", шаг 7

Считайте JSON-массив целых чисел, например `[3, 10, 7]`, и выведите их сумму.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    [3, 10, 7]

Пример вывода:

    20
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const nums = JSON.parse(prompt());
console.log(nums.reduce((sum, x) => sum + x, 0));
