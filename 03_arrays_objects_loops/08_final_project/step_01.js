// Запуск из корня репозитория
// node 03_arrays_objects_loops/08_final_project/step_01.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.8 "Итоговый проект", шаг 1

Интернет-магазин выгружает заказы в JSON. Напишите программу, которая готовит по ним короткий отчёт
для менеджера.

Ввод. Одна строка, JSON-массив заказов. У заказа есть поля `id` (номер), `customer` (имя
покупателя), `total` (сумма) и `status` со значением `new`, `delivered` или `cancelled`.

Вывод. Четыре строки.

- `Выручка: N`, сумма всех заказов со статусом `delivered`;
- `Заказов по статусам: new=A, delivered=B, cancelled=C`;
- `Лучший покупатель: ИМЯ`, у кого больше всего сумма доставленных заказов. При равенстве побеждает
тот, чей первый доставленный заказ стоит в массиве раньше. Если доставленных заказов нет, выведите
`Лучший покупатель: нет`;
- `Отменённые: id1, id2`, номера отменённых заказов по возрастанию через запятую с пробелом, или
`Отменённые: нет`.

Пригодятся `JSON.parse()`, методы массивов, `Map` для сумм по покупателям и шаблонные строки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    [{"id": 1, "customer": "Анна", "total": 1200, "status": "delivered"}, {"id": 2, "customer": "Иван", "total": 800, "status": "cancelled"}, {"id": 3, "customer": "Анна", "total": 450, "status": "delivered"}, {"id": 4, "customer": "Олег", "total": 3000, "status": "new"}]

Пример вывода:

    Выручка: 1650
    Заказов по статусам: new=1, delivered=2, cancelled=1
    Лучший покупатель: Анна
    Отменённые: 2
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const orders = JSON.parse(prompt());
const delivered = orders.filter((o) => o.status === "delivered");
console.log(`Выручка: ${delivered.reduce((s, o) => s + o.total, 0)}`);

const count = (st) => orders.filter((o) => o.status === st).length;
console.log(`Заказов по статусам: new=${count("new")}, delivered=${count("delivered")}, cancelled=${count("cancelled")}`);

const byCustomer = new Map();
for (const o of delivered) {
  if (byCustomer.has(o.customer)) {
    byCustomer.set(o.customer, byCustomer.get(o.customer) + o.total);
  } else {
    byCustomer.set(o.customer, o.total);
  }
}
let best = "нет";
let bestSum = -1;
for (const name of byCustomer.keys()) {
  if (byCustomer.get(name) > bestSum) {
    best = name;
    bestSum = byCustomer.get(name);
  }
}
console.log(`Лучший покупатель: ${best}`);

const cancelled = orders.filter((o) => o.status === "cancelled").map((o) => o.id).sort((a, b) => a - b);
console.log(`Отменённые: ${cancelled.length > 0 ? cancelled.join(", ") : "нет"}`);
