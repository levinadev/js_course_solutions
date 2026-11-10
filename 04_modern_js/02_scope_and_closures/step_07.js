// Запуск из корня репозитория
// node 04_modern_js/02_scope_and_closures/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.2 "Область видимости и замыкания", шаг 7

Напишите функцию `makeGreeting(greeting)`, которая возвращает функцию. Та принимает имя и возвращает
строку `ПРИВЕТСТВИЕ, ИМЯ!`. Считайте приветствие и имя, каждое с новой строки, создайте функцию
через `makeGreeting()` и выведите результат её вызова.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Привет
    Анна

Пример вывода:

    Привет, Анна!
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function makeGreeting(greeting) {
  return (name) => `${greeting}, ${name}!`;
}

const greet = makeGreeting(prompt());
console.log(greet(prompt()));
