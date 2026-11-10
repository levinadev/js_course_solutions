// Запуск из корня репозитория
// node 05_oop/02_classes/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.2 "Классы", шаг 10

Дополните класс `Rectangle`. Метод `scale(k)` увеличивает обе стороны в `k` раз и возвращает `this`.
Геттер `area` возвращает площадь, геттер `isSquare` даёт `true`, если стороны равны. Статический
метод `square(side)` создаёт квадрат.

Считайте строку вида `rect W H K` или `square S K`. Создайте фигуру, увеличьте её в `K` раз и
выведите площадь, а на следующей строке `квадрат` или `не квадрат`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    rect 2 3 2

Пример вывода:

    24
    не квадрат
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

  scale(k) {
    this.width *= k;
    this.height *= k;
    return this;
  }

  get area() {
    return this.width * this.height;
  }

  get isSquare() {
    return this.width === this.height;
  }

  static square(side) {
    return new Rectangle(side, side);
  }
}

const [kind, ...rest] = prompt().split(" ");
const nums = rest.map(Number);
const k = nums.at(-1);
const shape = kind === "square" ? Rectangle.square(nums[0]) : new Rectangle(nums[0], nums[1]);
shape.scale(k);
console.log(shape.area);
console.log(shape.isSquare ? "квадрат" : "не квадрат");
