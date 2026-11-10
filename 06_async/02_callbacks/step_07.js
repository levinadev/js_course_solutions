// Запуск из корня репозитория
// node 06_async/02_callbacks/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.2 "Колбэки", шаг 7

Напишите функцию `double(n, callback)`, которая через 10 мс вызывает `callback(n * 2)`. Считайте
число, вызовите `double` и в колбэке выведите `Результат: X`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    5

Пример вывода:

    Результат: 10
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function double(n, callback) {
  setTimeout(() => {
    callback(n * 2);
  }, 10);
}

double(Number(prompt()), (result) => {
  console.log(`Результат: ${result}`);
});
