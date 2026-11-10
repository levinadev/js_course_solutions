// Запуск из корня репозитория
// node 07_browser/01_dom/step_08.js
// Потом введите строки из примера ввода и нажмите Ctrl+D (в Windows Ctrl+Z и Enter)

/*
Урок 7.1 "Работа со страницей через DOM", шаг 8

На странице есть заголовок. Считайте имя посетителя и запишите в заголовок текст `Здравствуйте,
ИМЯ`.

    <h1 id="title">Магазин</h1>

Про страницу в задаче. Браузера при проверке нет, поэтому код работает с учебной страницей. В ней
есть `document`, `querySelector`, `classList`, события и `localStorage`, как в браузере. HTML
страницы указан в условии.

Ввод и вывод. Имя читайте функцией `prompt()`. Выводить ничего не нужно. После вашего кода проверка
сама выведет текст заголовка.

Пример ввода:

    Анна

Пример вывода:

    Здравствуйте, Анна
*/

// Скрытая часть кода на Stepik перед решением, её писать не нужно
const __input = require("fs").readFileSync(0, "utf8").replace(/\r/g, "").split("\n");
let __line = 0;
function prompt() { return __line < __input.length ? __input[__line++] : null; }
// Учебная страница для задач модуля "JavaScript в браузере" (m06_browser.py вставляет этот код в скрытую шапку).
// Небольшая копия DOM браузера: document, querySelector, createElement, append, classList, события со всплытием, формы.
const __VOID = new Set(["input", "br", "img", "hr", "meta"]);
const __esc = (s) => String(s).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

class Event {
  constructor(type, init = {}) {
    this.type = type;
    this.bubbles = init.bubbles ?? true;
    this.target = null;
    this.currentTarget = null;
    this.defaultPrevented = false;
    this.__stopped = false;
    if (init.key !== undefined) this.key = init.key;
  }
  preventDefault() { this.defaultPrevented = true; }
  stopPropagation() { this.__stopped = true; }
}

class __Text {
  constructor(data) { this.nodeType = 3; this.data = String(data); this.parentNode = null; }
  get textContent() { return this.data; }
}

class NodeList {
  constructor(items) { this.__items = items; items.forEach((x, i) => { this[i] = x; }); }
  get length() { return this.__items.length; }
  item(i) { return this.__items[i] ?? null; }
  forEach(fn) { this.__items.forEach((x, i) => fn(x, i, this)); }
  [Symbol.iterator]() { return this.__items[Symbol.iterator](); }
}

class DOMTokenList {
  constructor(el) { this.__el = el; }
  get __list() { return (this.__el.getAttribute("class") ?? "").split(/\s+/).filter(Boolean); }
  __set(list) { this.__el.setAttribute("class", list.join(" ")); }
  add(...names) { const l = this.__list; for (const n of names) if (!l.includes(n)) l.push(n); this.__set(l); }
  remove(...names) { if (this.__el.hasAttribute("class")) this.__set(this.__list.filter((x) => !names.includes(x))); }
  contains(name) { return this.__list.includes(name); }
  toggle(name, force) {
    const want = force === undefined ? !this.contains(name) : Boolean(force);
    if (want) this.add(name); else this.remove(name);
    return want;
  }
  get length() { return this.__list.length; }
  toString() { return this.__list.join(" "); }
}

class __Target {
  constructor() { this.__handlers = {}; }
  addEventListener(type, fn) { (this.__handlers[type] ??= []).includes(fn) || this.__handlers[type].push(fn); }
  removeEventListener(type, fn) { this.__handlers[type] = (this.__handlers[type] ?? []).filter((f) => f !== fn); }
  __fire(event) {
    event.currentTarget = this;
    for (const fn of [...(this.__handlers[event.type] ?? [])]) fn.call(this, event);
  }
}

function __matchOne(el, part) {
  const m = part.match(/^([a-zA-Z][\w-]*)?((?:[#.][\w-]+)*)$/);
  if (!m) throw new SyntaxError(`Селектор "${part}" в учебной странице не поддерживается`);
  if (m[1] && el.tagName !== m[1].toUpperCase()) return false;
  for (const bit of m[2].match(/[#.][\w-]+/g) ?? []) {
    if (bit[0] === "#" && el.id !== bit.slice(1)) return false;
    if (bit[0] === "." && !el.classList.contains(bit.slice(1))) return false;
  }
  return true;
}

function __matches(el, selector) {
  const parts = selector.trim().split(/\s+/);
  if (!__matchOne(el, parts.at(-1))) return false;
  let node = el.parentElement;
  for (let i = parts.length - 2; i >= 0; i--) {
    while (node && !__matchOne(node, parts[i])) node = node.parentElement;
    if (!node) return false;
    node = node.parentElement;
  }
  return true;
}

class Element extends __Target {
  constructor(tag) {
    super();
    this.tagName = tag.toUpperCase();
    this.nodeType = 1;
    this.__attrs = new Map();
    this.childNodes = [];
    this.parentNode = null;
    this.classList = new DOMTokenList(this);
    this.style = {};
    this.__value = null;
    this.checked = false;
  }
  get parentElement() { return this.parentNode instanceof Element ? this.parentNode : null; }
  get children() { return this.childNodes.filter((n) => n instanceof Element); }
  get firstElementChild() { return this.children[0] ?? null; }
  get lastElementChild() { return this.children.at(-1) ?? null; }
  get id() { return this.getAttribute("id") ?? ""; }
  set id(v) { this.setAttribute("id", v); }
  get className() { return this.getAttribute("class") ?? ""; }
  set className(v) { this.setAttribute("class", v); }
  get value() { return this.__value ?? this.getAttribute("value") ?? ""; }
  set value(v) { this.__value = String(v); }
  getAttribute(name) { return this.__attrs.has(name) ? this.__attrs.get(name) : null; }
  setAttribute(name, v) { this.__attrs.set(name, String(v)); }
  hasAttribute(name) { return this.__attrs.has(name); }
  removeAttribute(name) { this.__attrs.delete(name); }
  get textContent() { return this.childNodes.map((n) => n.textContent).join(""); }
  get innerText() { return this.textContent; }
  set innerText(v) { this.textContent = v; }
  set textContent(v) {
    this.childNodes.forEach((n) => { n.parentNode = null; });
    this.childNodes = v === "" || v === null ? [] : [new __Text(v)];
    this.childNodes.forEach((n) => { n.parentNode = this; });
  }
  append(...nodes) {
    for (let n of nodes) {
      if (!(n instanceof Element) && !(n instanceof __Text)) n = new __Text(n);
      if (n.parentNode) n.parentNode.childNodes = n.parentNode.childNodes.filter((x) => x !== n);
      n.parentNode = this;
      this.childNodes.push(n);
    }
  }
  appendChild(node) { this.append(node); return node; }
  prepend(...nodes) { const old = this.childNodes; this.childNodes = []; this.append(...nodes); this.childNodes.push(...old); }
  remove() { if (this.parentNode) { this.parentNode.childNodes = this.parentNode.childNodes.filter((x) => x !== this); this.parentNode = null; } }
  __all() { return this.children.flatMap((c) => [c, ...c.__all()]); }
  matches(selector) { return __matches(this, selector); }
  querySelector(selector) { return this.__all().find((el) => __matches(el, selector)) ?? null; }
  querySelectorAll(selector) { return new NodeList(this.__all().filter((el) => __matches(el, selector))); }
  closest(selector) { let el = this; while (el && !__matches(el, selector)) el = el.parentElement; return el; }
  get outerHTML() {
    const attrs = [...this.__attrs].map(([k, v]) => ` ${k}="${__esc(v).replaceAll('"', "&quot;")}"`).join("");
    const tag = this.tagName.toLowerCase();
    return __VOID.has(tag) ? `<${tag}${attrs}>` : `<${tag}${attrs}>${this.innerHTML}</${tag}>`;
  }
  get innerHTML() { return this.childNodes.map((n) => (n instanceof Element ? n.outerHTML : __esc(n.data))).join(""); }
  set innerHTML(html) { this.textContent = ""; __parse(String(html), this); }
  dispatchEvent(event) {
    event.target = this;
    const path = [];
    for (let el = this; el; el = el.parentNode) path.push(el);
    for (const node of event.bubbles ? path : [this]) {
      node.__fire(event);
      if (event.__stopped) break;
    }
    return !event.defaultPrevented;
  }
  click() {
    const ok = this.dispatchEvent(new Event("click"));
    const form = this.closest("form");
    if (ok && form && this.tagName === "BUTTON" && this.getAttribute("type") !== "button") form.requestSubmit();
  }
  requestSubmit() {
    if (this.dispatchEvent(new Event("submit"))) __reloads.push(this);
  }
  reset() { for (const el of this.querySelectorAll("input")) el.value = el.getAttribute("value") ?? ""; }
}

function __parse(html, parent) {
  const re = /<\/([a-z0-9]+)\s*>|<([a-z0-9]+)((?:\s+[\w-]+(?:="[^"]*")?)*)\s*>|([^<]+)/gi;
  const unesc = (s) => s.replaceAll("&lt;", "<").replaceAll("&gt;", ">").replaceAll("&quot;", '"').replaceAll("&amp;", "&");
  let cur = parent;
  for (const m of html.matchAll(re)) {
    if (m[1]) { cur = cur.parentNode ?? cur; continue; }
    if (m[4]) { if (m[4].trim()) cur.append(unesc(m[4].replace(/\s+/g, " ").trim())); continue; }
    const el = document.createElement(m[2]);
    for (const a of m[3].matchAll(/([\w-]+)(?:="([^"]*)")?/g)) el.setAttribute(a[1], unesc(a[2] ?? ""));
    cur.append(el);
    if (!__VOID.has(m[2].toLowerCase())) cur = el;
  }
}

const __reloads = [];
const document = new (class extends __Target {
  constructor() {
    super();
    this.documentElement = new Element("html");
    this.documentElement.parentNode = this;
    this.body = new Element("body");
    this.documentElement.append(this.body);
  }
  createElement(tag) { return new Element(tag); }
  querySelector(s) { return __matches(this.documentElement, s) ? this.documentElement : this.documentElement.querySelector(s); }
  querySelectorAll(s) { return this.documentElement.querySelectorAll(s); }
  getElementById(id) { return this.querySelector(`#${id}`); }
})();
const window = globalThis;

const localStorage = (() => {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => { data.set(String(key), String(value)); },
    removeItem: (key) => { data.delete(key); },
    clear: () => data.clear(),
    get length() { return data.size; },
  };
})();

function __page(html) { __parse(html, document.body); }
// после кода ученика: страница "загрузилась", срабатывают обработчики DOMContentLoaded
function __ready() { document.__fire(Object.assign(new Event("DOMContentLoaded"), { target: document })); }
__page("<h1 id=\"title\">Магазин</h1>");


// Решение
const name = prompt();
document.querySelector("#title").textContent = `Здравствуйте, ${name}`;


// Скрытая часть кода на Stepik после решения, она выводит, что стало со страницей
__ready();
console.log(document.querySelector("#title").textContent);
