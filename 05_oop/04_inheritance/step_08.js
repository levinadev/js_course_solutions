// Запуск из корня репозитория
// node 05_oop/04_inheritance/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.4 "Наследование", шаг 8

Создайте класс `Animal` с конструктором `(name)` и методом `speak()`, который возвращает `КЛИЧКА
издаёт звук`. Создайте наследника `Cat`, у которого `speak()` возвращает `КЛИЧКА мяукает`.

Считайте строку вида `cat Мурка` или `animal Рекс`. Создайте объект нужного класса и выведите
результат `speak()`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    cat Мурка

Пример вывода:

    Мурка мяукает
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} издаёт звук`;
  }
}

class Cat extends Animal {
  speak() {
    return `${this.name} мяукает`;
  }
}

const [kind, name] = prompt().split(" ");
const pet = kind === "cat" ? new Cat(name) : new Animal(name);
console.log(pet.speak());
