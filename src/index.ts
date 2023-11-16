// alert('ok');

// import { greet } from "./greet";

// greet('Hello world!');

// setTimeout(() => { greet('Ок') }, 10_000)

const mainEl = document.getElementById('main');
//mainEl.querySelectorAll('[data-color]') as NodeListOf<HTMLElement>
// querySelectorAll по атрибуту не гарантирует возврат эл-та со св-вом style
const spanCollection = mainEl ? Array.from(mainEl.querySelectorAll<HTMLElement>('[data-color]')) : [];

spanCollection.forEach((spanEl) => {
    const colorValue = spanEl.textContent;
    if (colorValue) {
        const paintRGB = () => {
            spanEl.style.backgroundColor = colorValue;
        };

        spanEl.addEventListener('click', paintRGB);


        setTimeout(() => {
            spanEl.removeEventListener('click', paintRGB)
        }, 5_000)

        // spanEl.style.backgroundColor = colorValue; }, { once: true });  //once: true - если нужно однократное срабатывание
        // spanEl.onclick = () => { spanEl.style.backgroundColor = colorValue; } - первый вариант
    }


})

// // вариант с удалением свойства
// spanCollection.forEach((spanEl) => {
//     const colorValue = spanEl.textContent;
   
//         function paintRGB()
//         {
//             if (colorValue) {
//                 spanEl.style.setProperty('background-color', colorValue) ;

//                 setTimeout(() => {
//                     spanEl.style.removeProperty('background-color')
//                 }, 1_000)
//             }
            
//         };

//         spanEl.addEventListener('click', paintRGB);


//         setTimeout(() => {
//             spanEl.removeEventListener('click', paintRGB)
//         }, 5_000)
//     }


// )

