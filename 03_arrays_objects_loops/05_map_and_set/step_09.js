// Запуск из корня репозитория
// node 03_arrays_objects_loops/05_map_and_set/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.5 "Map и Set", шаг 9

Считайте текст, слова через пробел, без знаков препинания. С помощью `Map` посчитайте, сколько раз
встречается каждое слово без учёта регистра. Выведите слова маленькими буквами в порядке первого
появления, каждое на отдельной строке в формате `слово N`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    Кот пёс кот КОТ

Пример вывода:

    кот 3
    пёс 1
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const counts = new Map();
for (const word of prompt().toLowerCase().split(" ")) {
  if (counts.has(word)) {
    counts.set(word, counts.get(word) + 1);
  } else {
    counts.set(word, 1);
  }
}
for (const word of counts.keys()) {
  console.log(`${word} ${counts.get(word)}`);
}
