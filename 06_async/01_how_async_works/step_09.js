// Запуск из корня репозитория
// node 06_async/01_how_async_works/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.1 "Как работает асинхронность", шаг 9

В первой строке число команд `n`, дальше `n` строк вида `sync ТЕКСТ`, `promise ТЕКСТ` или `timer
ТЕКСТ`, текст из одного слова. Выполните команды по порядку.

- `sync` сразу выводит текст.
- `promise` ставит вывод текста в микрозадачи через `Promise.resolve().then(...)`.
- `timer` откладывает вывод текста через `setTimeout` с задержкой 0.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    timer A
    promise B
    sync C

Пример вывода:

    C
    B
    A
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [cmd, word] = prompt().split(" ");
  if (cmd === "sync") {
    console.log(word);
  } else if (cmd === "promise") {
    Promise.resolve().then(() => console.log(word));
  } else {
    setTimeout(() => console.log(word), 0);
  }
}
