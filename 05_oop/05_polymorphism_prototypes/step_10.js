// Запуск из корня репозитория
// node 05_oop/05_polymorphism_prototypes/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.5 "Полиморфизм и прототипы", шаг 10

Создайте три класса скидок с методом `apply(price)`. `PercentDiscount(percent)` уменьшает цену на
процент, `FixedDiscount(amount)` вычитает сумму, но не ниже нуля, `NoDiscount` оставляет цену как
есть.

Считайте цену, а на следующей строке скидки через пробел, например `percent:10 fixed:300 none`.
Выведите цену после каждой скидки с двумя знаками после точки, а последней строкой `Лучшая: ЦЕНА`,
самую низкую из них.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    1000
    percent:10 fixed:300 none

Пример вывода:

    900.00
    700.00
    1000.00
    Лучшая: 700.00
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class PercentDiscount {
  constructor(percent) {
    this.percent = percent;
  }

  apply(price) {
    return price * (1 - this.percent / 100);
  }
}

class FixedDiscount {
  constructor(amount) {
    this.amount = amount;
  }

  apply(price) {
    return Math.max(0, price - this.amount);
  }
}

class NoDiscount {
  apply(price) {
    return price;
  }
}

const price = Number(prompt());
const discounts = prompt().split(" ").map((s) => {
  const [kind, value] = s.split(":");
  if (kind === "percent") {
    return new PercentDiscount(Number(value));
  }
  if (kind === "fixed") {
    return new FixedDiscount(Number(value));
  }
  return new NoDiscount();
});

const results = discounts.map((d) => d.apply(price));
for (const r of results) {
  console.log(r.toFixed(2));
}
console.log(`Лучшая: ${Math.min(...results).toFixed(2)}`);
