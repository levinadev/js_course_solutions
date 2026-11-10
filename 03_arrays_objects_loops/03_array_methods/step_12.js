// Запуск из корня репозитория
// node 03_arrays_objects_loops/03_array_methods/step_12.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.3 "Методы массивов", шаг 12

Считайте строку со словами через пробел. Выведите три строки. На первой первое слово длиннее 5 букв
или `нет`, если такого слова нет. На второй `да` или `нет`, есть ли слово короче 3 букв. На третьей
`да` или `нет`, все ли слова короче 10 букв. Используйте `find`, `some` и `every`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    кот Москва библиотека

Пример вывода:

    Москва
    нет
    нет
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const words = prompt().split(" ");
const long = words.find((w) => w.length > 5);
console.log(long === undefined ? "нет" : long);
console.log(words.some((w) => w.length < 3) ? "да" : "нет");
console.log(words.every((w) => w.length < 10) ? "да" : "нет");
