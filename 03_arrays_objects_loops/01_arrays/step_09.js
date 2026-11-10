// Запуск из корня репозитория
// node 03_arrays_objects_loops/01_arrays/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.1 "Массивы", шаг 9

Считайте строку со словами через пробел. Выведите первое слово, а на следующей строке последнее.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    яблоко груша слива

Пример вывода:

    яблоко
    слива
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const words = prompt().split(" ");
console.log(words[0]);
console.log(words.at(-1));
