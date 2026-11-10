// Запуск из корня репозитория
// node 05_oop/03_encapsulation_private_fields/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.3 "Инкапсуляция и приватные поля", шаг 10

Создайте класс `Playlist` с приватным массивом песен `#songs` и методами. `add(title, seconds)`
добавляет песню, а если длительность не целое положительное число, бросает `RangeError` с текстом
`Некорректная длительность`. `remove(title)` удаляет все песни с таким названием. Геттер `count`
возвращает число песен, а геттер `duration` общую длительность в виде `М:СС`.

В первой строке число команд `n`, дальше `n` команд вида `add Название Секунды` или `remove
Название`, название из одного слова. Ошибку при добавлении поймайте и выведите её текст. В конце
выведите `Песен: N, длительность: М:СС`.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    add Звезда 215
    add Кукушка 400
    remove Звезда

Пример вывода:

    Песен: 1, длительность: 6:40
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Playlist {
  #songs = [];

  add(title, seconds) {
    if (!Number.isInteger(seconds) || seconds <= 0) {
      throw new RangeError("Некорректная длительность");
    }
    this.#songs.push({ title: title, seconds: seconds });
  }

  remove(title) {
    this.#songs = this.#songs.filter((song) => song.title !== title);
  }

  get count() {
    return this.#songs.length;
  }

  get duration() {
    const total = this.#songs.reduce((sum, song) => sum + song.seconds, 0);
    const seconds = `${total % 60}`.padStart(2, "0");
    return `${Math.floor(total / 60)}:${seconds}`;
  }
}

const list = new Playlist();
const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [cmd, title, seconds] = prompt().split(" ");
  try {
    if (cmd === "add") {
      list.add(title, Number(seconds));
    } else {
      list.remove(title);
    }
  } catch (error) {
    console.log(error.message);
  }
}
console.log(`Песен: ${list.count}, длительность: ${list.duration}`);
