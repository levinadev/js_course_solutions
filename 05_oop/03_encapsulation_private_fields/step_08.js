// Запуск из корня репозитория
// node 05_oop/03_encapsulation_private_fields/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.3 "Инкапсуляция и приватные поля", шаг 8

Создайте класс `Counter` с приватным полем `#count`, сначала 0, методом `inc()`, который прибавляет
1, и геттером `count`. Считайте число `n`, вызовите `inc()` `n` раз и выведите `Счётчик: N`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3

Пример вывода:

    Счётчик: 3
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Counter {
  #count = 0;

  inc() {
    this.#count += 1;
  }

  get count() {
    return this.#count;
  }
}

const counter = new Counter();
const n = Number(prompt());
for (let i = 0; i < n; i++) {
  counter.inc();
}
console.log(`Счётчик: ${counter.count}`);
