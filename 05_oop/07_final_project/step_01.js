// Запуск из корня репозитория
// node 05_oop/07_final_project/step_01.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.7 "Итоговый проект", шаг 1

Сделайте ядро менеджера задач. Это та часть, которую потом можно подключить к странице с кнопками.

Классы. Нужны два класса.

- `Task` с полями `id`, `title`, `priority` и `done`. Приоритет бывает `low`, `medium` или `high`, а
неизвестный приоритет считается `medium`. Метод `toString()` возвращает строку вида `[x] #2 Купить
молоко (high)` для выполненной задачи или `[ ] #1 Позвонить (low)` для невыполненной.
- `TaskList` с приватным массивом задач. Номера задачам он выдаёт сам, по порядку с 1. Методы
`add(title, priority)`, `complete(id)`, `remove(id)` и `list()`, геттер `stats`.

Ввод. Число команд `n`, затем `n` команд. Ниже в таблице, что делает каждая команда и что она
выводит.

Команда | Что делает и выводит
add high Купить молоко | добавляет задачу и выводит Добавлена задача #N
done N | отмечает задачу выполненной, а если её нет, выводит Задача #N не найдена
remove N | удаляет задачу, а если её нет, выводит Задача #N не найдена
list | выводит задачи по одной на строку. Сначала невыполненные, от high к low, при равном
приоритете по номеру. Потом выполненные по номеру. Если задач нет, выводит Список пуст
stats | выводит Всего: A, выполнено: B, осталось: C

Пригодятся классы, приватные поля, геттер, `filter()` и сортировка.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    6
    add high Купить молоко
    add low Позвонить маме
    add medium Сделать уроки
    done 2
    list
    stats

Пример вывода:

    Добавлена задача #1
    Добавлена задача #2
    Добавлена задача #3
    [ ] #1 Купить молоко (high)
    [ ] #3 Сделать уроки (medium)
    [x] #2 Позвонить маме (low)
    Всего: 3, выполнено: 1, осталось: 2
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const ORDER = { high: 0, medium: 1, low: 2 };

class Task {
  constructor(id, title, priority) {
    this.id = id;
    this.title = title;
    this.priority = priority in ORDER ? priority : "medium";
    this.done = false;
  }

  toString() {
    return `[${this.done ? "x" : " "}] #${this.id} ${this.title} (${this.priority})`;
  }
}

class TaskList {
  #tasks = [];
  #nextId = 1;

  add(title, priority) {
    const task = new Task(this.#nextId, title, priority);
    this.#nextId += 1;
    this.#tasks.push(task);
    return task.id;
  }

  #find(id) {
    return this.#tasks.find((t) => t.id === id);
  }

  complete(id) {
    const task = this.#find(id);
    if (task) {
      task.done = true;
    }
    return task !== undefined;
  }

  remove(id) {
    const task = this.#find(id);
    this.#tasks = this.#tasks.filter((t) => t.id !== id);
    return task !== undefined;
  }

  list() {
    const open = this.#tasks.filter((t) => !t.done).toSorted((a, b) => ORDER[a.priority] - ORDER[b.priority]);
    const closed = this.#tasks.filter((t) => t.done);
    return [...open, ...closed];
  }

  get stats() {
    const done = this.#tasks.filter((t) => t.done).length;
    return { total: this.#tasks.length, done: done, left: this.#tasks.length - done };
  }
}

const tasks = new TaskList();
const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [cmd, arg, ...rest] = prompt().split(" ");
  if (cmd === "add") {
    console.log(`Добавлена задача #${tasks.add(rest.join(" "), arg)}`);
  } else if (cmd === "done" || cmd === "remove") {
    const ok = cmd === "done" ? tasks.complete(Number(arg)) : tasks.remove(Number(arg));
    if (!ok) {
      console.log(`Задача #${arg} не найдена`);
    }
  } else if (cmd === "list") {
    const all = tasks.list();
    console.log(all.length > 0 ? all.map((t) => t.toString()).join("\n") : "Список пуст");
  } else if (cmd === "stats") {
    const { total, done, left } = tasks.stats;
    console.log(`Всего: ${total}, выполнено: ${done}, осталось: ${left}`);
  }
}
