// document.addEventListener('DOMContentLoaded', function () {
//     function getElements() {

//         const data = JSON.parse(localStorage.getItem('hiddenCards'));

//         const catalog = document.querySelector('.test');
//         data.forEach(element => {
//             const newCard = document.createElement('div');
//             newCard.innerHTML = element.html;
//             newCard.style.cssText = element.css;
//             catalog.prepend(newCard);
//         });
//     }

//     const testBtn = document.querySelector('.debug');

//     testBtn.addEventListener('click', () => {
//         getElements()
//     })
// })
