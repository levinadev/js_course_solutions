// Запуск из корня репозитория
// node 03_arrays_objects_loops/03_array_methods/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.3 "Методы массивов", шаг 9

Считайте строку с целыми числами через пробел и выведите только чётные числа через пробел, в том же
порядке. Если чётных нет, выведите `нет`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    1 2 3 4

Пример вывода:

    2 4
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const nums = prompt().split(" ").map(Number);
const even = nums.filter((x) => x % 2 === 0);
console.log(even.length > 0 ? even.join(" ") : "нет");
