// Запуск из корня репозитория
// node 06_async/03_promises/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.3 "Промисы", шаг 9

Напишите функцию `checkAge(text)`, которая возвращает промис. Если `Number(text)` целое число от 0
до 120, промис выполняется этим числом. Иначе он отклоняется с `RangeError` и текстом `Некорректный
возраст`.

Считайте строку и цепочкой `then()` выведите `Через 10 лет вам будет N`. Ошибку поймайте в `catch()`
и выведите её текст. Последней строкой в любом случае выведите `Проверка окончена` через
`finally()`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    25

Пример вывода:

    Через 10 лет вам будет 35
    Проверка окончена
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
function checkAge(text) {
  return new Promise((resolve, reject) => {
    const age = Number(text);
    if (Number.isInteger(age) && age >= 0 && age <= 120) {
      resolve(age);
    } else {
      reject(new RangeError("Некорректный возраст"));
    }
  });
}

checkAge(prompt())
  .then((age) => `Через 10 лет вам будет ${age + 10}`)
  .then((line) => console.log(line))
  .catch((error) => console.log(error.message))
  .finally(() => console.log("Проверка окончена"));
