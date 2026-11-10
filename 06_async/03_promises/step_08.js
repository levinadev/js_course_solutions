// Запуск из корня репозитория
// node 06_async/03_promises/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.3 "Промисы", шаг 8

Напишите функцию `wait(ms, value)`, которая возвращает промис. Он выполняется значением `value`
через `ms` миллисекунд. Считайте слово, вызовите `wait(10, слово)` и в `then()` выведите слово
большими буквами.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    привет

Пример вывода:

    ПРИВЕТ
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function wait(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(value), ms);
  });
}

wait(10, prompt()).then((word) => console.log(word.toUpperCase()));
