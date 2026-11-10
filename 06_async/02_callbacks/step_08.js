// Запуск из корня репозитория
// node 06_async/02_callbacks/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.2 "Колбэки", шаг 8

Склад хранится в объекте `const stock = { чай: 12, кофе: 0, торт: 3 };`. Напишите функцию
`checkStock(item, callback)` по соглашению "ошибка первым аргументом". Через 5 мс она вызывает
`callback(null, количество)`, если товар есть, и `callback(new Error(...))` с текстом `Нет товара:
ТОВАР`, если товара нет в объекте или его количество 0.

Считайте название товара, вызовите функцию и в колбэке выведите `ТОВАР: N шт.` или текст ошибки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    чай

Пример вывода:

    чай: 12 шт.
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const stock = { чай: 12, кофе: 0, торт: 3 };

function checkStock(item, callback) {
  setTimeout(() => {
    if (item in stock && stock[item] > 0) {
      callback(null, stock[item]);
    } else {
      callback(new Error(`Нет товара: ${item}`));
    }
  }, 5);
}

const item = prompt();
checkStock(item, (error, count) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`${item}: ${count} шт.`);
  }
});
