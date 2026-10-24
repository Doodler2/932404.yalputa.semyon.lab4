const userName = prompt("Введите ваше имя:");

if (userName) {
    alert("Привет, " + userName + "! Добро пожаловать на страницу дизайнера.");
} else {
    alert("Привет, гость! Добро пожаловать на страницу дизайнера.");
}

console.log("Пользователь вошёл: " + (userName || "гость"));

const layouts = [1440, 1920, 2560, 1200, 1024, 3840, 1600];

console.log("Массив ширин макетов (px):", layouts);

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function filterWide(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1920) {
            result.push(arr[i]);
        }
    }
    return result;
}

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

const maxLayout = findMax(layouts);
const wideLayouts = filterWide(layouts);
const totalWidth = calculateSum(layouts);
const averageWidth = Math.round(totalWidth / layouts.length);

let narrowCount = 0;
for (let i = 0; i < layouts.length; i++) {
    if (layouts[i] <= 1200) {
        narrowCount++;
    }
}

const narrowShare = Math.round((narrowCount / layouts.length) * 100);

alert("Средняя ширина – " + averageWidth + " px, " + wideLayouts.length + " макетов – сверхширокие.");

console.log("Узких макетов (≤ 1200 px): " + narrowCount);
console.log("Доля узких макетов: " + narrowShare + "%");

if (maxLayout > 2560) {
    console.log("Такой макет лучше разбить на несколько экранов.");
}