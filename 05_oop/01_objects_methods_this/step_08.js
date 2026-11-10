// Запуск из корня репозитория
// node 05_oop/01_objects_methods_this/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.1 "Объекты, методы и this", шаг 8

Создайте объект `counter` со свойством `value`, сначала 0, и тремя методами. `inc()` прибавляет 1,
`dec()` вычитает 1, `reset()` обнуляет. Каждый метод возвращает `this`, чтобы вызовы можно было
ставить цепочкой.

Считайте строку команд через пробел, например `inc inc dec`. Выполните команды по порядку и выведите
итоговое `value`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    inc inc dec

Пример вывода:

    1
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const counter = {
  value: 0,
  inc() {
    this.value += 1;
    return this;
  },
  dec() {
    this.value -= 1;
    return this;
  },
  reset() {
    this.value = 0;
    return this;
  },
};

for (const cmd of prompt().split(" ")) {
  counter[cmd]();
}
console.log(counter.value);
