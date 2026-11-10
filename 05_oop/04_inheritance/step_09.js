// Запуск из корня репозитория
// node 05_oop/04_inheritance/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.4 "Наследование", шаг 9

Создайте класс `Employee` с конструктором `(name, salary)` и методом `info()`, который возвращает
`ИМЯ, зарплата S`. Создайте наследника `Manager` с конструктором `(name, salary, team)`. Он вызывает
`super(name, salary)` и сохраняет `team`. Его `info()` берёт результат родителя через `super.info()`
и дописывает `, команда T чел.`.

В первой строке число сотрудников `n`, дальше `n` строк вида `employee|Анна|90000` или
`manager|Олег|150000|5`. Выведите `info()` каждого сотрудника.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    2
    employee|Анна|90000
    manager|Олег|150000|5

Пример вывода:

    Анна, зарплата 90000
    Олег, зарплата 150000, команда 5 чел.
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  info() {
    return `${this.name}, зарплата ${this.salary}`;
  }
}

class Manager extends Employee {
  constructor(name, salary, team) {
    super(name, salary);
    this.team = team;
  }

  info() {
    return `${super.info()}, команда ${this.team} чел.`;
  }
}

const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [kind, name, salary, team] = prompt().split("|");
  const worker = kind === "manager" ? new Manager(name, salary, team) : new Employee(name, salary);
  console.log(worker.info());
}
