const cards = document.querySelectorAll('.catalog__card');

cards.forEach(function (card) {
    // let card = document.querySelector('.catalog__card');
    let button = card.querySelector('.footer-image');
    let discount = card.querySelector('.footer-discount');
    let btnText = '<span>Купить</span>';
    let btnImage = '<img src="/src/img/buy.svg" id="button-image" alt="Корзина">';

    if (card.querySelector('.footer-discount')) {
        card.addEventListener('mouseover', () => {
            button.innerHTML = btnText;
            discount.style.display = 'none'
        });

        card.addEventListener('mouseleave', () => {
            button.innerHTML = btnImage;
            discount.style.display = 'block';
        });
    }
});

// // Находим ссылки и кнопки
// const links = document.querySelectorAll('.catalog__number-pages a');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const otherBtn = document.querySelector('.other-btn');

// let currentPageIndex = 0; // Текущая страница

// // function goToPage(index) {
// //     if (index < 0 || index >= pageLinks.length) {
// //         return;
// //     }
// //     // Изменяем адрес текущей ссылки
// //     pageLinks[currentPageIndex].href = pageLinks[index].href;
// //     currentPageIndex = index;
// //     // Делаем кнопки вперед/назад неактивными, если достигнута первая или последняя страница
// //     prevBtn.disabled = currentPageIndex === 0;
// //     nextBtn.disabled = currentPageIndex === pageLinks.length - 1;
// // }

// // prevBtn.addEventListener('click', function () {
// //     goToPage(currentPageIndex - 1);
// // });

// // nextBtn.addEventListener('click', function () {
// //     goToPage(currentPageIndex + 1);
// // });

// // // Скрываем все страницы, кроме первой
// // for (let i = 1; i < links.length; i++) {
// //     links[i].style.display = 'none';
// // }

// // Обработчик нажатия на кнопку "вправо"
// nextBtn.addEventListener('click', () => {
//     // Если страница не последняя, то переходим на следующую страницу
//     if (currentPageIndex < links.length - 1) {
//         links[currentPageIndex].style.display = 'none'; // Скрываем текущую страницу
//         currentPageIndex++; // Увеличиваем индекс текущей страницы
//         links[currentPageIndex].style.display = 'block'; // Показываем следующую страницу
//         prevBtn.disabled = false; // Включаем кнопку "влево", если она была выключена
//     }
//     // Если страница последняя, то выключаем кнопку "вправо"
//     if (currentPageIndex === links.length - 1) {
//         nextBtn.disabled = true;
//     }
// });

// // Обработчик нажатия на кнопку "влево"
// prevBtn.addEventListener('click', () => {
//     // Если страница не первая, то переходим на предыдущую страницу
//     if (currentPageIndex > 0) {
//         links[currentPageIndex].style.display = 'none'; // Скрываем текущую страницу
//         currentPageIndex--; // Уменьшаем индекс текущей страницы
//         links[currentPageIndex].style.display = 'block'; // Показываем предыдущую страницу
//         nextBtn.disabled = false; // Включаем кнопку "вправо", если она была выключена
//     }
//     // Если страница первая, то выключаем кнопку "влево"
//     if (currentPageIndex === 0) {
//         prevBtn.disabled = true;
//     }
// });

// // Обработчик нажатия на кнопку "другое"
// otherBtn.addEventListener('click', () => {
//   // Создаем новые кнопки
//   const newBtn1 = document.createElement('button');
//   const newBtn2 = document.createElement('