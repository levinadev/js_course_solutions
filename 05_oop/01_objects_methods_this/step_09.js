// Запуск из корня репозитория
// node 05_oop/01_objects_methods_this/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.1 "Объекты, методы и this", шаг 9

Создайте объект `cart` с массивом `items` и двумя методами. `add(name, price)` кладёт в массив
объект `{ name, price }` и возвращает `this`, а `total()` возвращает сумму цен.

В первой строке число товаров `n`, дальше `n` строк вида `название цена`, название из одного слова.
Добавьте все товары и выведите `Товаров: N, сумма: S`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    хлеб 50
    молоко 90
    сыр 300

Пример вывода:

    Товаров: 3, сумма: 440
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const cart = {
  items: [],
  add(name, price) {
    this.items.push({ name: name, price: price });
    return this;
  },
  total() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
};

const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [name, price] = prompt().split(" ");
  cart.add(name, Number(price));
}
console.log(`Товаров: ${cart.items.length}, сумма: ${cart.total()}`);
