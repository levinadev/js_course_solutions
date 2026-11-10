// Запуск из корня репозитория
// node 03_arrays_objects_loops/05_map_and_set/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.5 "Map и Set", шаг 7

Считайте строку со словами через пробел и выведите, сколько в ней разных слов.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    кот пёс кот

Пример вывода:

    2
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const words = prompt().split(" ");
console.log(new Set(words).size);
