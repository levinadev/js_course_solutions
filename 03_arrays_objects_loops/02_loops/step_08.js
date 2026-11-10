// Запуск из корня репозитория
// node 03_arrays_objects_loops/02_loops/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.2 "Циклы", шаг 8

Считайте строку с целыми числами через пробел и выведите их сумму.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    1 2 3

Пример вывода:

    6
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
let sum = 0;
for (const x of prompt().split(" ")) {
  sum += Number(x);
}
console.log(sum);
