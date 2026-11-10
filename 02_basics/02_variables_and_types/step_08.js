// Запуск из корня репозитория
// node 02_basics/02_variables_and_types/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.2 "Переменные и типы данных", шаг 8

Считайте имя. Создайте переменную `greeting` со словом `Привет` и выведите строку `Привет, <имя>`.
Затем положите в `greeting` слово `Пока` и выведите `Пока, <имя>`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Анна

Пример вывода:

    Привет, Анна
    Пока, Анна
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const name = prompt();
let greeting = "Привет";
console.log(greeting + ", " + name);
greeting = "Пока";
console.log(greeting + ", " + name);
