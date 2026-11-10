// Запуск из корня репозитория
// node 05_oop/05_polymorphism_prototypes/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.5 "Полиморфизм и прототипы", шаг 9

Добавьте к `Circle` и `Square` класс `Rect` с конструктором `(width, height)` и своим `area()`. В
первой строке число фигур `n`, дальше `n` строк вида `circle 1`, `square 2` или `rect 2 3`.

Выведите площадь каждой фигуры с двумя знаками после точки, а последней строкой `Сумма: S`, тоже с
двумя знаками. Площади считайте в одном цикле через `area()`, без проверки класса.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    circle 1
    square 2
    rect 2 3

Пример вывода:

    3.14
    4.00
    6.00
    Сумма: 13.14
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Circle {
  constructor(r) {
    this.r = r;
  }

  area() {
    return Math.PI * this.r * this.r;
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [];
const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [kind, ...rest] = prompt().split(" ");
  const nums = rest.map(Number);
  if (kind === "circle") {
    shapes.push(new Circle(nums[0]));
  } else if (kind === "square") {
    shapes.push(new Square(nums[0]));
  } else {
    shapes.push(new Rect(nums[0], nums[1]));
  }
}

let total = 0;
for (const s of shapes) {
  console.log(s.area().toFixed(2));
  total += s.area();
}
console.log(`Сумма: ${total.toFixed(2)}`);
