// Запуск из корня репозитория
// node 05_oop/05_polymorphism_prototypes/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.5 "Полиморфизм и прототипы", шаг 8

Создайте классы `Circle` с конструктором `(r)` и `Square` с конструктором `(side)`, у обоих метод
`area()`. Считайте строку вида `circle 2` или `square 3`, создайте фигуру и выведите её площадь с
двумя знаками после точки.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    circle 2

Пример вывода:

    12.57
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

const [kind, size] = prompt().split(" ");
const shape = kind === "circle" ? new Circle(Number(size)) : new Square(Number(size));
console.log(shape.area().toFixed(2));
