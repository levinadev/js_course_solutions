// Запуск из корня репозитория
// node 06_async/04_async_await/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.4 "async и await", шаг 8

Напишите функцию `wait(ms, value)` из урока и async-функцию `main()`. В `main()` считайте два числа,
каждое с новой строки, дождитесь `await wait(10, a + b)` и выведите `Сумма: S`. Последней строкой
вызовите `main()`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2
    3

Пример вывода:

    Сумма: 5
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function main() {
  const a = Number(prompt());
  const b = Number(prompt());
  const sum = await wait(10, a + b);
  console.log(`Сумма: ${sum}`);
}

main();
