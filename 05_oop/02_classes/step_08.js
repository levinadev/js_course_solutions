// Запуск из корня репозитория
// node 05_oop/02_classes/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.2 "Классы", шаг 8

Создайте класс `User` с конструктором `(name, age)` и методом `info()`, который возвращает строку
`ИМЯ, возраст ВОЗРАСТ`. Считайте имя и возраст, каждое с новой строки, создайте пользователя через
`new` и выведите результат `info()`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Анна
    28

Пример вывода:

    Анна, возраст 28
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    return `${this.name}, возраст ${this.age}`;
  }
}

const user = new User(prompt(), prompt());
console.log(user.info());
