// Запуск из корня репозитория
// node 05_oop/04_inheritance/step_10.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 5.4 "Наследование", шаг 10

Создайте класс `Notification` с конструктором `(to, text)` и методом `format()`, который возвращает
`Для КОМУ: ТЕКСТ`. Создайте трёх наследников.

- `EmailNotification` в конструкторе делает первую букву текста заглавной, а `format()` дописывает в
начало `Email `.
- `SmsNotification` в конструкторе обрезает текст до 20 символов, а `format()` дописывает в начало
`SMS `.
- `PushNotification` без своего конструктора, его `format()` дописывает `Push ` в начало и `
(новое)` в конец.

В первой строке число уведомлений `n`, дальше `n` строк вида `тип|кому|текст`, где тип это `email`,
`sms` или `push`. Выведите результат `format()` для каждого уведомления.

Ввод и вывод. Входные данные читайте функцией `prompt()`. Каждый вызов возвращает следующую строку
ввода так же, как `prompt()` в браузере возвращает то, что ввёл пользователь. Результат выводите
через `console.log()`.

Пример ввода:

    3
    email|anna@mail.ru|ваш заказ отправлен
    sms|+79001234567|Код подтверждения 4815 действует 5 минут
    push|Иван|Новое сообщение

Пример вывода:

    Email Для anna@mail.ru: Ваш заказ отправлен
    SMS Для +79001234567: Код подтверждения 48
    Push Для Иван: Новое сообщение (новое)
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }


// Решение
class Notification {
  constructor(to, text) {
    this.to = to;
    this.text = text;
  }

  format() {
    return `Для ${this.to}: ${this.text}`;
  }
}

class EmailNotification extends Notification {
  constructor(to, text) {
    super(to, text[0].toUpperCase() + text.slice(1));
  }

  format() {
    return `Email ${super.format()}`;
  }
}

class SmsNotification extends Notification {
  constructor(to, text) {
    super(to, text.slice(0, 20));
  }

  format() {
    return `SMS ${super.format()}`;
  }
}

class PushNotification extends Notification {
  format() {
    return `Push ${super.format()} (новое)`;
  }
}

const n = Number(prompt());
for (let i = 0; i < n; i++) {
  const [type, to, text] = prompt().split("|");
  let item;
  if (type === "email") {
    item = new EmailNotification(to, text);
  } else if (type === "sms") {
    item = new SmsNotification(to, text);
  } else {
    item = new PushNotification(to, text);
  }
  console.log(item.format());
}
