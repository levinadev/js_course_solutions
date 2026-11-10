// Запуск из корня репозитория
// node 06_async/03_promises/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.3 "Промисы", шаг 10

Напишите функцию `wait(ms, value)` из урока, вместе с проверкой. При отрицательном `ms` промис
отклоняется с `RangeError` и текстом `Отрицательная задержка`.

Считайте строку задержек через пробел, например `30 10 20`. Для каждой задержки `ms` запустите
`wait(ms, ms)` и с помощью `Promise.all` выведите сумму результатов. Если какой-то промис отклонён,
выведите `Ошибка: ТЕКСТ`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    30 10 20

Пример вывода:

    60
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function wait(ms, value) {
  return new Promise((resolve, reject) => {
    if (ms < 0) {
      reject(new RangeError("Отрицательная задержка"));
    } else {
      setTimeout(() => resolve(value), ms);
    }
  });
}

const delays = prompt().split(" ").map(Number);
Promise.all(delays.map((ms) => wait(ms, ms)))
  .then((values) => console.log(values.reduce((sum, x) => sum + x, 0)))
  .catch((error) => console.log(`Ошибка: ${error.message}`));
