// Запуск из корня репозитория
// node 06_async/05_fetch_and_api/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.5 "fetch и работа с API", шаг 10

Сервер тот же, `/api/users/ID`. Считайте id через пробел и загрузите всех пользователей сразу через
`Promise.all`. Для каждого в исходном порядке выведите `ИМЯ (ГОРОД)`, а если ответ не `ok`, выведите
`Пользователь ID не найден`.

Про fetch в задачах. Настоящих запросов в интернет при проверке нет. Функция `fetch(url)` в задачах
обращается к учебному серверу и возвращает объект ответа с полями `ok`, `status` и методом `json()`,
как настоящий fetch. Адреса указаны в условии.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    1 2 3

Пример вывода:

    Анна (Казань)
    Иван (Москва)
    Олег (Сочи)
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }
const __API = {
  "/api/users/1": { id: 1, name: "Анна", city: "Казань" },
  "/api/users/2": { id: 2, name: "Иван", city: "Москва" },
  "/api/users/3": { id: 3, name: "Олег", city: "Сочи" },
  "/api/users/4": { id: 4, name: "Мария", city: "Пермь" },
  "/api/users/5": { id: 5, name: "Kate", city: "Тверь" },
  "/api/users/6": { id: 6, name: "Тимур", city: "Уфа" },
  "/api/weather/Москва": { city: "Москва", temp: 7, sky: "облачно" },
  "/api/weather/Казань": { city: "Казань", temp: 4, sky: "дождь" },
  "/api/weather/Сочи": { city: "Сочи", temp: 18, sky: "солнечно" },
  "/api/weather/Самара": { city: "Самара", temp: 18, sky: "ясно" },
  "/api/weather/Мурманск": { city: "Мурманск", temp: -3, sky: "снег" },
  "/api/weather/Калининград": { city: "Калининград", temp: 9, sky: "ветрено" },
};
async function fetch(url) {
  await new Promise((r) => setTimeout(r, 5));
  const path = decodeURIComponent(url);
  if (path.includes("broken")) throw new TypeError("Failed to fetch");
  const body = __API[path];
  return {
    ok: body !== undefined,
    status: body !== undefined ? 200 : 404,
    json: async () => body ?? { error: "Not found" },
  };
}


// Решение
async function loadUser(id) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) {
    return `Пользователь ${id} не найден`;
  }
  const user = await response.json();
  return `${user.name} (${user.city})`;
}

async function main() {
  const ids = prompt().split(" ");
  const lines = await Promise.all(ids.map((id) => loadUser(id)));
  console.log(lines.join("\n"));
}

main();
