// Запуск из корня репозитория
// node 02_basics/05_conditions/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 2.5 "Условия", шаг 9

Считайте оценку за тест (число от 0 до 100) и выведите `отлично` (от 85), `хорошо` (от 70), `зачёт`
(от 50), иначе `незачёт`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    100

Пример вывода:

    отлично
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const score = Number(prompt());
if (score >= 85) {
  console.log("отлично");
} else if (score >= 70) {
  console.log("хорошо");
} else if (score >= 50) {
  console.log("зачёт");
} else {
  console.log("незачёт");
}
