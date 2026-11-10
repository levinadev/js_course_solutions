// Запуск из корня репозитория
// node 05_oop/03_encapsulation_private_fields/step_09.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.3 "Инкапсуляция и приватные поля", шаг 9

Создайте класс `Thermostat` с приватным полем `#temp`, сначала 20, и парой геттер и сеттер `temp`.
Сеттер записывает значение, только если оно от 10 до 30 включительно, иначе бросает `RangeError` с
текстом `Допустимо от 10 до 30`.

Считайте строку чисел через пробел. Для каждого числа попробуйте записать его в `temp`. Если
получилось, выведите `Установлено: T`, а если была ошибка, выведите её текст, запятую и `осталось
T`, где `T` текущая температура.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    25

Пример вывода:

    Установлено: 25
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Thermostat {
  #temp = 20;

  set temp(value) {
    if (value < 10 || value > 30) {
      throw new RangeError("Допустимо от 10 до 30");
    }
    this.#temp = value;
  }

  get temp() {
    return this.#temp;
  }
}

const t = new Thermostat();
for (const x of prompt().split(" ").map(Number)) {
  try {
    t.temp = x;
    console.log(`Установлено: ${t.temp}`);
  } catch (error) {
    console.log(`${error.message}, осталось ${t.temp}`);
  }
}
