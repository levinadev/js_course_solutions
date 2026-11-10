// Запуск из корня репозитория
// node 03_arrays_objects_loops/05_map_and_set/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 3.5 "Map и Set", шаг 10

Считайте две строки с тегами двух статей, теги через пробел. С помощью `Set` выведите три строки. На
первой общие теги, на второй теги, которые есть только у первой статьи, на третьей количество разных
тегов в обеих статьях вместе. Теги в первых двух строках выводите через пробел в алфавитном порядке
или слово `нет`, если их нет.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    js css html
    js node

Пример вывода:

    js
    css html
    4
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
const first = prompt().split(" ");
const second = prompt().split(" ");
const a = new Set(first);
const b = new Set(second);
const common = Array.from(a).filter((t) => b.has(t)).sort();
const onlyFirst = Array.from(a).filter((t) => !b.has(t)).sort();
console.log(common.length > 0 ? common.join(" ") : "нет");
console.log(onlyFirst.length > 0 ? onlyFirst.join(" ") : "нет");
const all = new Set(first);
for (const t of second) {
  all.add(t);
}
console.log(all.size);
