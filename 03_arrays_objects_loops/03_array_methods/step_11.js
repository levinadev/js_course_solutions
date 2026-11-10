// Запуск из корня репозитория
// node 03_arrays_objects_loops/03_array_methods/step_11.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.3 "Методы массивов", шаг 11

Считайте строку с целыми числами через пробел. Выведите на первой строке числа по возрастанию, на
второй по убыванию, через пробел. Числа сортируйте как числа, а не как строки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    10 9 1 25

Пример вывода:

    1 9 10 25
    25 10 9 1
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const arr = prompt().split(" ").map(Number);
console.log(arr.toSorted((a, b) => a - b).join(" "));
console.log(arr.toSorted((a, b) => b - a).join(" "));
