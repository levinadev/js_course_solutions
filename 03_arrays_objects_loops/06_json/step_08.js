// Запуск из корня репозитория
// node 03_arrays_objects_loops/06_json/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.6 "JSON", шаг 8

Считайте JSON-массив товаров вида `[{"name": "чай", "price": 120, "qty": 2}]`, где `price` цена за
штуку, а `qty` количество. Выведите три строки. На первой название самого дорогого товара по цене за
штуку, если таких несколько, то первого из них. На второй общую стоимость, то есть сумму цен,
умноженных на количество. На третьей JSON-массив названий товаров, которых больше одной штуки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    [{"name": "чай", "price": 120, "qty": 2}, {"name": "торт", "price": 450, "qty": 1}]

Пример вывода:

    торт
    690
    ["чай"]
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const items = JSON.parse(prompt());
let top = items[0];
for (const it of items) {
  if (it.price > top.price) {
    top = it;
  }
}
console.log(top.name);
console.log(items.reduce((sum, it) => sum + it.price * it.qty, 0));
console.log(JSON.stringify(items.filter((it) => it.qty > 1).map((it) => it.name)));
