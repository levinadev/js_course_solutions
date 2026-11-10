// Запуск из корня репозитория
// node 06_async/04_async_await/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.4 "async и await", шаг 10

Цены хранятся в объекте `const prices = { чай: 120, кофе: 250, торт: 480, сок: 90 };`. Напишите
async-функцию `loadPrice(name)`, которая ждёт 10 мс и возвращает цену, а если товара нет, бросает
`Error` с текстом `Нет цены: ТОВАР`.

Считайте товары через пробел, загрузите все цены сразу через `Promise.all` и выведите `Итого: S
руб.` Если хотя бы одной цены нет, выведите `Ошибка: ТЕКСТ`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    чай торт

Пример вывода:

    Итого: 600 руб.
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const prices = { чай: 120, кофе: 250, торт: 480, сок: 90 };

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function loadPrice(name) {
  await wait(10);
  if (!(name in prices)) {
    throw new Error(`Нет цены: ${name}`);
  }
  return prices[name];
}

async function main() {
  try {
    const list = await Promise.all(prompt().split(" ").map((name) => loadPrice(name)));
    console.log(`Итого: ${list.reduce((sum, x) => sum + x, 0)} руб.`);
  } catch (error) {
    console.log(`Ошибка: ${error.message}`);
  }
}

main();
