// Запуск из корня репозитория
// node 04_modern_js/03_errors_and_exceptions/step_07.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.3 "Ошибки и исключения", шаг 7

Считайте строку. Если это правильный JSON, выведите `JSON в порядке`, иначе выведите `Ошибка в
JSON`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    {"a": 1}

Пример вывода:

    JSON в порядке
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
try {
  JSON.parse(prompt());
  console.log("JSON в порядке");
} catch (error) {
  console.log("Ошибка в JSON");
}
