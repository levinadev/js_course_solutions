// Запуск из корня репозитория
// node 02_basics/07_functions/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.7 "Функции", шаг 8

Напишите функцию `initials(firstName, lastName)`, которая возвращает инициалы, например `И. П.` для
имени Иван и фамилии Петров. Считайте имя и фамилию, каждое с новой строки, и выведите результат
функции.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Иван
    Петров

Пример вывода:

    И. П.
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function initials(firstName, lastName) {
  return `${firstName[0]}. ${lastName[0]}.`;
}

const firstName = prompt();
const lastName = prompt();
console.log(initials(firstName, lastName));
