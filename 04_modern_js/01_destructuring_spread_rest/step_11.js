// Запуск из корня репозитория
// node 04_modern_js/01_destructuring_spread_rest/step_11.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 4.1 "Деструктуризация, spread и rest", шаг 11

Считайте JSON-объект профиля, например `{"name": "Анна", "contacts": {"email": "a@mail.ru"}}`.
Выведите три строки. На первой имя, на второй email или `нет email`, на третьей телефон из поля
`phone` или `нет телефона`. Поля `contacts` в объекте может не быть.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    {"name": "Анна", "contacts": {"email": "a@mail.ru"}}

Пример вывода:

    Анна
    a@mail.ru
    нет телефона
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const { name, contacts } = JSON.parse(prompt());
console.log(name);
console.log(contacts?.email ?? "нет email");
console.log(contacts?.phone ?? "нет телефона");
