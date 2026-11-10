// Запуск из корня репозитория
// node 06_async/04_async_await/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.4 "async и await", шаг 9

В библиотеке лежит объект `const library = { Дюна: 704, Онегин: 224, Маугли: 160 };` с числом
страниц. Напишите async-функцию `findBook(title)`. Она ждёт 5 мс через `await wait(5)` и возвращает
число страниц, а если книги нет, бросает `Error` с текстом `Книга не найдена: НАЗВАНИЕ`.

Считайте названия через запятую и обработайте книги по очереди в цикле `for...of` с `await`. Для
каждой выведите `НАЗВАНИЕ: N стр.` или текст ошибки, а последней строкой `Всего страниц: S` по
найденным книгам.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Дюна,Онегин

Пример вывода:

    Дюна: 704 стр.
    Онегин: 224 стр.
    Всего страниц: 928
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const library = { Дюна: 704, Онегин: 224, Маугли: 160 };

function wait(ms, value) {
  return new Promise((resolve) => setTimeout(() => resolve(value), ms));
}

async function findBook(title) {
  await wait(5);
  if (!(title in library)) {
    throw new Error(`Книга не найдена: ${title}`);
  }
  return library[title];
}

async function main() {
  let total = 0;
  for (const title of prompt().split(",")) {
    try {
      const pages = await findBook(title);
      console.log(`${title}: ${pages} стр.`);
      total += pages;
    } catch (error) {
      console.log(error.message);
    }
  }
  console.log(`Всего страниц: ${total}`);
}

main();
