// Запуск из корня репозитория
// node 06_async/07_final_project/step_01.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 6.7 "Итоговый проект", шаг 1

Сделайте модуль для виджета погоды. Он загружает погоду по нескольким городам сразу и собирает
понятную сводку, даже если по части городов данных нет.

Сервер. По адресу `/api/weather/ГОРОД` учебный сервер отвечает JSON вида `{ city, temp, sky }`, где
`temp` температура, а `sky` погода на небе. Если города нет, приходит ответ с `ok`, равным `false`,
и кодом 404. По городу `broken` сервер изображает сбой сети, и промис `fetch` отклоняется.

Ввод. Названия городов через запятую, например `Москва,Сочи,Атлантида`.

Вывод. Сначала по строке на каждый город в исходном порядке.

- `Москва: 7°, облачно`, если данные есть.
- `Атлантида: нет данных`, если сервер ответил кодом 404.
- `broken: ошибка сети`, если промис `fetch` отклонён.

Последней строкой выведите `Теплее всего: Сочи (18°)`, то есть город с самой высокой температурой
среди городов с данными. При равной температуре берите первый по порядку. Если данных нет ни по
одному городу, выведите `Теплее всего: нет данных`.

Загружайте города сразу через `Promise.allSettled`, чтобы ошибка одного города не ломала всю сводку.

Про fetch в задачах. Настоящих запросов в интернет при проверке нет. Функция `fetch(url)` в задачах
обращается к учебному серверу и возвращает объект ответа с полями `ok`, `status` и методом `json()`,
как настоящий fetch. Адреса указаны в условии.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Москва,Сочи,Атлантида

Пример вывода:

    Москва: 7°, облачно
    Сочи: 18°, солнечно
    Атлантида: нет данных
    Теплее всего: Сочи (18°)
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
async function load(city) {
  const response = await fetch(`/api/weather/${encodeURIComponent(city)}`);
  if (!response.ok) {
    return null;
  }
  return response.json();
}

async function main() {
  const cities = prompt().split(",");
  const results = await Promise.allSettled(cities.map((city) => load(city)));
  let best = null;
  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    if (r.status === "rejected") {
      console.log(`${cities[i]}: ошибка сети`);
    } else if (r.value === null) {
      console.log(`${cities[i]}: нет данных`);
    } else {
      const { city, temp, sky } = r.value;
      console.log(`${city}: ${temp}°, ${sky}`);
      if (best === null || temp > best.temp) {
        best = r.value;
      }
    }
  }
  console.log(best ? `Теплее всего: ${best.city} (${best.temp}°)` : "Теплее всего: нет данных");
}

main();
