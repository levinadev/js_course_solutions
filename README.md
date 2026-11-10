# Решения задач курса [Программирование на JavaScript](https://stepik.org/a/302649) на Stepik

В репозитории собраны все 102 задачи курса на программирование, включая итоговые проекты. В файле задачи есть условие, пример из тестов и решение, которое проходит проверку на Stepik. Репозиторий нужен, чтобы после решения задачи можно было сравнить свой код с вариантом автора курса.

## Как пользоваться

1. Сначала решите задачу сами и отправьте решение на Stepik.
2. Найдите файл задачи. Он лежит в папке модуля, внутри неё в папке урока и называется `step_NN.js`, где `NN` означает номер шага в уроке. Ссылки на все файлы есть в содержании ниже.
3. Сравните своё решение с решением из файла. Оно стоит после комментария `// Решение`.

Если задача не получается, не открывайте решение сразу. Перечитайте теорию урока, откройте подсказку под условием на Stepik, запустите свой код и посмотрите, что он выводит. Подсмотренное решение почти ничему не учит.

## Что ещё есть в файле

Кроме решения, в файле есть код, который на Stepik добавляется к решению и которого студент не видит. Писать его не нужно, он нужен, чтобы файл запускался.

- Код перед решением есть во всех задачах. Он делает так, что `prompt()` читает строки ввода, как на Stepik. В модуле про асинхронность там же учебный сервер для `fetch`, а в модуле про браузер учебная страница, потому что настоящего браузера при проверке нет.
- Код после решения есть только в модуле про браузер. Он нажимает кнопки, заполняет формы и выводит, что стало со страницей.

## Как запустить решение

Нужен Node.js 22 или новее. Решения проверялись на Node.js 22.16.0, как на Stepik.

Команды выполняются из корня репозитория. Например, так запускается первая задача.

```bash
node 02_basics/01_intro_to_js/step_08.js
```

Если в задаче есть ввод, после запуска введите строки из примера ввода и нажмите `Ctrl+D` (в Windows `Ctrl+Z` и `Enter`). Ввод можно передать и сразу, одной командой.

```bash
echo "Анна" | node 02_basics/02_input_data/step_04.js
```

## Содержание

Номер модуля в названии папки совпадает с номером модуля в курсе, а номер урока с номером урока внутри модуля.

### 2. Введение в JavaScript и основы синтаксиса

| Урок | Шаг | Файл |
|---|---|---|
| 2.1 Знакомство с JavaScript | 8 | [`02_basics/01_intro_to_js/step_08.js`](02_basics/01_intro_to_js/step_08.js) |
| 2.2 Ввод данных | 4 | [`02_basics/02_input_data/step_04.js`](02_basics/02_input_data/step_04.js) |
| 2.3 Переменные и типы данных | 7 | [`02_basics/03_variables_and_types/step_07.js`](02_basics/03_variables_and_types/step_07.js) |
| 2.3 Переменные и типы данных | 8 | [`02_basics/03_variables_and_types/step_08.js`](02_basics/03_variables_and_types/step_08.js) |
| 2.4 Операторы и преобразование типов | 9 | [`02_basics/04_operators_and_type_conversion/step_09.js`](02_basics/04_operators_and_type_conversion/step_09.js) |
| 2.4 Операторы и преобразование типов | 10 | [`02_basics/04_operators_and_type_conversion/step_10.js`](02_basics/04_operators_and_type_conversion/step_10.js) |
| 2.4 Операторы и преобразование типов | 11 | [`02_basics/04_operators_and_type_conversion/step_11.js`](02_basics/04_operators_and_type_conversion/step_11.js) |
| 2.5 Условия | 8 | [`02_basics/05_conditions/step_08.js`](02_basics/05_conditions/step_08.js) |
| 2.5 Условия | 9 | [`02_basics/05_conditions/step_09.js`](02_basics/05_conditions/step_09.js) |
| 2.5 Условия | 10 | [`02_basics/05_conditions/step_10.js`](02_basics/05_conditions/step_10.js) |
| 2.5 Условия | 11 | [`02_basics/05_conditions/step_11.js`](02_basics/05_conditions/step_11.js) |
| 2.6 Строки и методы строк | 8 | [`02_basics/06_strings/step_08.js`](02_basics/06_strings/step_08.js) |
| 2.6 Строки и методы строк | 9 | [`02_basics/06_strings/step_09.js`](02_basics/06_strings/step_09.js) |
| 2.6 Строки и методы строк | 10 | [`02_basics/06_strings/step_10.js`](02_basics/06_strings/step_10.js) |
| 2.6 Строки и методы строк | 11 | [`02_basics/06_strings/step_11.js`](02_basics/06_strings/step_11.js) |
| 2.7 Функции | 7 | [`02_basics/07_functions/step_07.js`](02_basics/07_functions/step_07.js) |
| 2.7 Функции | 8 | [`02_basics/07_functions/step_08.js`](02_basics/07_functions/step_08.js) |
| 2.7 Функции | 9 | [`02_basics/07_functions/step_09.js`](02_basics/07_functions/step_09.js) |
| 2.9 Итоговый проект | 1 | [`02_basics/09_final_project/step_01.js`](02_basics/09_final_project/step_01.js) |

### 3. Массивы, объекты и циклы

| Урок | Шаг | Файл |
|---|---|---|
| 3.1 Массивы | 8 | [`03_arrays_objects_loops/01_arrays/step_08.js`](03_arrays_objects_loops/01_arrays/step_08.js) |
| 3.1 Массивы | 9 | [`03_arrays_objects_loops/01_arrays/step_09.js`](03_arrays_objects_loops/01_arrays/step_09.js) |
| 3.1 Массивы | 10 | [`03_arrays_objects_loops/01_arrays/step_10.js`](03_arrays_objects_loops/01_arrays/step_10.js) |
| 3.1 Массивы | 11 | [`03_arrays_objects_loops/01_arrays/step_11.js`](03_arrays_objects_loops/01_arrays/step_11.js) |
| 3.2 Циклы | 7 | [`03_arrays_objects_loops/02_loops/step_07.js`](03_arrays_objects_loops/02_loops/step_07.js) |
| 3.2 Циклы | 8 | [`03_arrays_objects_loops/02_loops/step_08.js`](03_arrays_objects_loops/02_loops/step_08.js) |
| 3.2 Циклы | 9 | [`03_arrays_objects_loops/02_loops/step_09.js`](03_arrays_objects_loops/02_loops/step_09.js) |
| 3.2 Циклы | 10 | [`03_arrays_objects_loops/02_loops/step_10.js`](03_arrays_objects_loops/02_loops/step_10.js) |
| 3.3 Методы массивов | 8 | [`03_arrays_objects_loops/03_array_methods/step_08.js`](03_arrays_objects_loops/03_array_methods/step_08.js) |
| 3.3 Методы массивов | 9 | [`03_arrays_objects_loops/03_array_methods/step_09.js`](03_arrays_objects_loops/03_array_methods/step_09.js) |
| 3.3 Методы массивов | 10 | [`03_arrays_objects_loops/03_array_methods/step_10.js`](03_arrays_objects_loops/03_array_methods/step_10.js) |
| 3.3 Методы массивов | 11 | [`03_arrays_objects_loops/03_array_methods/step_11.js`](03_arrays_objects_loops/03_array_methods/step_11.js) |
| 3.3 Методы массивов | 12 | [`03_arrays_objects_loops/03_array_methods/step_12.js`](03_arrays_objects_loops/03_array_methods/step_12.js) |
| 3.4 Объекты | 7 | [`03_arrays_objects_loops/04_objects/step_07.js`](03_arrays_objects_loops/04_objects/step_07.js) |
| 3.4 Объекты | 8 | [`03_arrays_objects_loops/04_objects/step_08.js`](03_arrays_objects_loops/04_objects/step_08.js) |
| 3.4 Объекты | 9 | [`03_arrays_objects_loops/04_objects/step_09.js`](03_arrays_objects_loops/04_objects/step_09.js) |
| 3.5 Map и Set | 7 | [`03_arrays_objects_loops/05_map_and_set/step_07.js`](03_arrays_objects_loops/05_map_and_set/step_07.js) |
| 3.5 Map и Set | 8 | [`03_arrays_objects_loops/05_map_and_set/step_08.js`](03_arrays_objects_loops/05_map_and_set/step_08.js) |
| 3.5 Map и Set | 9 | [`03_arrays_objects_loops/05_map_and_set/step_09.js`](03_arrays_objects_loops/05_map_and_set/step_09.js) |
| 3.5 Map и Set | 10 | [`03_arrays_objects_loops/05_map_and_set/step_10.js`](03_arrays_objects_loops/05_map_and_set/step_10.js) |
| 3.6 JSON | 6 | [`03_arrays_objects_loops/06_json/step_06.js`](03_arrays_objects_loops/06_json/step_06.js) |
| 3.6 JSON | 7 | [`03_arrays_objects_loops/06_json/step_07.js`](03_arrays_objects_loops/06_json/step_07.js) |
| 3.6 JSON | 8 | [`03_arrays_objects_loops/06_json/step_08.js`](03_arrays_objects_loops/06_json/step_08.js) |
| 3.8 Итоговый проект | 1 | [`03_arrays_objects_loops/08_final_project/step_01.js`](03_arrays_objects_loops/08_final_project/step_01.js) |

### 4. Современный JavaScript и инструменты

| Урок | Шаг | Файл |
|---|---|---|
| 4.1 Деструктуризация, spread и rest | 9 | [`04_modern_js/01_destructuring_spread_rest/step_09.js`](04_modern_js/01_destructuring_spread_rest/step_09.js) |
| 4.1 Деструктуризация, spread и rest | 10 | [`04_modern_js/01_destructuring_spread_rest/step_10.js`](04_modern_js/01_destructuring_spread_rest/step_10.js) |
| 4.1 Деструктуризация, spread и rest | 11 | [`04_modern_js/01_destructuring_spread_rest/step_11.js`](04_modern_js/01_destructuring_spread_rest/step_11.js) |
| 4.1 Деструктуризация, spread и rest | 12 | [`04_modern_js/01_destructuring_spread_rest/step_12.js`](04_modern_js/01_destructuring_spread_rest/step_12.js) |
| 4.2 Область видимости и замыкания | 7 | [`04_modern_js/02_scope_and_closures/step_07.js`](04_modern_js/02_scope_and_closures/step_07.js) |
| 4.2 Область видимости и замыкания | 8 | [`04_modern_js/02_scope_and_closures/step_08.js`](04_modern_js/02_scope_and_closures/step_08.js) |
| 4.2 Область видимости и замыкания | 9 | [`04_modern_js/02_scope_and_closures/step_09.js`](04_modern_js/02_scope_and_closures/step_09.js) |
| 4.3 Ошибки и исключения | 7 | [`04_modern_js/03_errors_and_exceptions/step_07.js`](04_modern_js/03_errors_and_exceptions/step_07.js) |
| 4.3 Ошибки и исключения | 8 | [`04_modern_js/03_errors_and_exceptions/step_08.js`](04_modern_js/03_errors_and_exceptions/step_08.js) |
| 4.3 Ошибки и исключения | 9 | [`04_modern_js/03_errors_and_exceptions/step_09.js`](04_modern_js/03_errors_and_exceptions/step_09.js) |
| 4.5 Регулярные выражения | 7 | [`04_modern_js/05_regular_expressions/step_07.js`](04_modern_js/05_regular_expressions/step_07.js) |
| 4.5 Регулярные выражения | 8 | [`04_modern_js/05_regular_expressions/step_08.js`](04_modern_js/05_regular_expressions/step_08.js) |
| 4.5 Регулярные выражения | 9 | [`04_modern_js/05_regular_expressions/step_09.js`](04_modern_js/05_regular_expressions/step_09.js) |
| 4.6 Math, Date и числа | 7 | [`04_modern_js/06_math_date_numbers/step_07.js`](04_modern_js/06_math_date_numbers/step_07.js) |
| 4.6 Math, Date и числа | 8 | [`04_modern_js/06_math_date_numbers/step_08.js`](04_modern_js/06_math_date_numbers/step_08.js) |
| 4.6 Math, Date и числа | 9 | [`04_modern_js/06_math_date_numbers/step_09.js`](04_modern_js/06_math_date_numbers/step_09.js) |
| 4.8 Итоговый проект | 1 | [`04_modern_js/08_final_project/step_01.js`](04_modern_js/08_final_project/step_01.js) |

### 5. Объектно-ориентированное программирование

| Урок | Шаг | Файл |
|---|---|---|
| 5.1 Объекты, методы и this | 7 | [`05_oop/01_objects_methods_this/step_07.js`](05_oop/01_objects_methods_this/step_07.js) |
| 5.1 Объекты, методы и this | 8 | [`05_oop/01_objects_methods_this/step_08.js`](05_oop/01_objects_methods_this/step_08.js) |
| 5.1 Объекты, методы и this | 9 | [`05_oop/01_objects_methods_this/step_09.js`](05_oop/01_objects_methods_this/step_09.js) |
| 5.2 Классы | 8 | [`05_oop/02_classes/step_08.js`](05_oop/02_classes/step_08.js) |
| 5.2 Классы | 9 | [`05_oop/02_classes/step_09.js`](05_oop/02_classes/step_09.js) |
| 5.2 Классы | 10 | [`05_oop/02_classes/step_10.js`](05_oop/02_classes/step_10.js) |
| 5.3 Инкапсуляция и приватные поля | 8 | [`05_oop/03_encapsulation_private_fields/step_08.js`](05_oop/03_encapsulation_private_fields/step_08.js) |
| 5.3 Инкапсуляция и приватные поля | 9 | [`05_oop/03_encapsulation_private_fields/step_09.js`](05_oop/03_encapsulation_private_fields/step_09.js) |
| 5.3 Инкапсуляция и приватные поля | 10 | [`05_oop/03_encapsulation_private_fields/step_10.js`](05_oop/03_encapsulation_private_fields/step_10.js) |
| 5.4 Наследование | 8 | [`05_oop/04_inheritance/step_08.js`](05_oop/04_inheritance/step_08.js) |
| 5.4 Наследование | 9 | [`05_oop/04_inheritance/step_09.js`](05_oop/04_inheritance/step_09.js) |
| 5.4 Наследование | 10 | [`05_oop/04_inheritance/step_10.js`](05_oop/04_inheritance/step_10.js) |
| 5.5 Полиморфизм и прототипы | 8 | [`05_oop/05_polymorphism_prototypes/step_08.js`](05_oop/05_polymorphism_prototypes/step_08.js) |
| 5.5 Полиморфизм и прототипы | 9 | [`05_oop/05_polymorphism_prototypes/step_09.js`](05_oop/05_polymorphism_prototypes/step_09.js) |
| 5.5 Полиморфизм и прототипы | 10 | [`05_oop/05_polymorphism_prototypes/step_10.js`](05_oop/05_polymorphism_prototypes/step_10.js) |
| 5.7 Итоговый проект | 1 | [`05_oop/07_final_project/step_01.js`](05_oop/07_final_project/step_01.js) |

### 6. Асинхронный JavaScript

| Урок | Шаг | Файл |
|---|---|---|
| 6.1 Как работает асинхронность | 7 | [`06_async/01_how_async_works/step_07.js`](06_async/01_how_async_works/step_07.js) |
| 6.1 Как работает асинхронность | 8 | [`06_async/01_how_async_works/step_08.js`](06_async/01_how_async_works/step_08.js) |
| 6.1 Как работает асинхронность | 9 | [`06_async/01_how_async_works/step_09.js`](06_async/01_how_async_works/step_09.js) |
| 6.2 Колбэки | 7 | [`06_async/02_callbacks/step_07.js`](06_async/02_callbacks/step_07.js) |
| 6.2 Колбэки | 8 | [`06_async/02_callbacks/step_08.js`](06_async/02_callbacks/step_08.js) |
| 6.2 Колбэки | 9 | [`06_async/02_callbacks/step_09.js`](06_async/02_callbacks/step_09.js) |
| 6.3 Промисы | 8 | [`06_async/03_promises/step_08.js`](06_async/03_promises/step_08.js) |
| 6.3 Промисы | 9 | [`06_async/03_promises/step_09.js`](06_async/03_promises/step_09.js) |
| 6.3 Промисы | 10 | [`06_async/03_promises/step_10.js`](06_async/03_promises/step_10.js) |
| 6.4 async и await | 8 | [`06_async/04_async_await/step_08.js`](06_async/04_async_await/step_08.js) |
| 6.4 async и await | 9 | [`06_async/04_async_await/step_09.js`](06_async/04_async_await/step_09.js) |
| 6.4 async и await | 10 | [`06_async/04_async_await/step_10.js`](06_async/04_async_await/step_10.js) |
| 6.5 fetch и работа с API | 8 | [`06_async/05_fetch_and_api/step_08.js`](06_async/05_fetch_and_api/step_08.js) |
| 6.5 fetch и работа с API | 9 | [`06_async/05_fetch_and_api/step_09.js`](06_async/05_fetch_and_api/step_09.js) |
| 6.5 fetch и работа с API | 10 | [`06_async/05_fetch_and_api/step_10.js`](06_async/05_fetch_and_api/step_10.js) |
| 6.7 Итоговый проект | 1 | [`06_async/07_final_project/step_01.js`](06_async/07_final_project/step_01.js) |

### 7. JavaScript в браузере

| Урок | Шаг | Файл |
|---|---|---|
| 7.1 Работа со страницей через DOM | 8 | [`07_browser/01_dom/step_08.js`](07_browser/01_dom/step_08.js) |
| 7.1 Работа со страницей через DOM | 9 | [`07_browser/01_dom/step_09.js`](07_browser/01_dom/step_09.js) |
| 7.1 Работа со страницей через DOM | 10 | [`07_browser/01_dom/step_10.js`](07_browser/01_dom/step_10.js) |
| 7.2 События | 8 | [`07_browser/02_events/step_08.js`](07_browser/02_events/step_08.js) |
| 7.2 События | 9 | [`07_browser/02_events/step_09.js`](07_browser/02_events/step_09.js) |
| 7.2 События | 10 | [`07_browser/02_events/step_10.js`](07_browser/02_events/step_10.js) |
| 7.3 Формы и localStorage | 8 | [`07_browser/03_forms_and_localstorage/step_08.js`](07_browser/03_forms_and_localstorage/step_08.js) |
| 7.3 Формы и localStorage | 9 | [`07_browser/03_forms_and_localstorage/step_09.js`](07_browser/03_forms_and_localstorage/step_09.js) |
| 7.3 Формы и localStorage | 10 | [`07_browser/03_forms_and_localstorage/step_10.js`](07_browser/03_forms_and_localstorage/step_10.js) |
| 7.5 Итоговый проект | 1 | [`07_browser/05_final_project/step_01.js`](07_browser/05_final_project/step_01.js) |
