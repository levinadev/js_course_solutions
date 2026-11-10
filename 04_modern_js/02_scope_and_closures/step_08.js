// Запуск из корня репозитория
// node 04_modern_js/02_scope_and_closures/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.2 "Область видимости и замыкания", шаг 8

Напишите функцию `createLimiter(limit)`, которая возвращает функцию-пропускалку. Каждый её вызов
возвращает `true`, пока число вызовов не больше `limit`, а потом `false`. Считайте `limit` и число
попыток `n`, каждое с новой строки, и выведите результаты `n` вызовов через пробел.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    5

Пример вывода:

    true true true false false
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function createLimiter(limit) {
  let calls = 0;
  return () => {
    calls += 1;
    return calls <= limit;
  };
}

const limit = Number(prompt());
const n = Number(prompt());
const allow = createLimiter(limit);
const results = [];
for (let i = 0; i < n; i++) {
  results.push(allow());
}
console.log(results.join(" "));
