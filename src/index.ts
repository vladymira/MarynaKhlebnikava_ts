import { COLORS } from "./colors";
import { createElementByColor } from "./createElementByColor";

const mainEl = document.getElementById('main');
const coloredElements = COLORS.map((color) => { createElementByColor(color) });

// пример
// for (const coloredElement of coloredElements) {
//     mainEl?.appendChild(coloredElement);
// }

// еще пример
//mainEl?.append(...coloredElements);

// еще пример
const fragment = document.createDocumentFragment();
COLORS.forEach((color) => {
    fragment.appendChild(createElementByColor(color));
})

// вар1
mainEl?.appendChild(fragment);

// вар2
mainEl?.appendChild(COLORS.reduce((fragment,color)=>{
    fragment.appendChild(createElementByColor(color));
    return fragment;
}, document.createDocumentFragment()))








// mainEl?.addEventListener('click', (event) => {
//     const targetEl = event.target as HTMLElement; // не просто базоы=вый класс, а HTMLElement
//     const coloredEl = targetEl.closest<HTMLElement>('[data-color]'); // хотим отловить событие у span, которые раскрашиваем

//     if (coloredEl) {
//         const colorValue = coloredEl.getAttribute('data-color');
//         coloredEl.style.setProperty('background-color', colorValue);

//         //coloredEl.style.setProperty('background-color', coloredEl.textContent);
//     }
// });



