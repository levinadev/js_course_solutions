// Запуск из корня репозитория
// node 05_oop/02_classes/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.2 "Классы", шаг 9

Создайте класс `Rectangle` с конструктором `(width, height)` и двумя геттерами. `area` возвращает
площадь, а `perimeter` периметр. Считайте ширину и высоту через пробел и выведите площадь, а на
следующей строке периметр.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2 3

Пример вывода:

    6
    10
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

const [w, h] = prompt().split(" ").map(Number);
const rect = new Rectangle(w, h);
console.log(rect.area);
console.log(rect.perimeter);
