// Получаем элементы изображений
const smallImages = document.querySelectorAll('.small-image');
const bigImage = document.querySelector('.big-image');
const firstImage = document.querySelector('#first-image');
const secondImage = document.querySelector('#second-image');
const lastImage = document.querySelector('#last-image');
const columnImages = document.querySelector('.product__images-column')

// Добавляем обработчик клика для каждой маленькой фотографии
smallImages.forEach(function (smallImage) {
    smallImage.addEventListener('click', function () {
        // Получаем адрес большого изображения из атрибута data-src
        const bigImageSrc = this.dataset.src;
        // Устанавливаем новый адрес большого изображения
        bigImage.src = bigImageSrc;
        // Удаляем класс active у всех маленьких фотографий
        smallImages.forEach(function (smallImage) {
            smallImage.classList.remove('active');
        });
        // Добавляем класс active выбранной маленькой фотографии
        this.classList.add('active');

        if (event.target === firstImage) {
            upBtnHidden()
            downBtnVisible()
            editPaddingLarge()
        } else if (event.target === secondImage) {
            upBtnVisible()
            downBtnVisible()
            editPaddingLess()
        } else if (event.target === lastImage) {
            upBtnVisible()
            downButtonHidden()
            editPaddingLarge()
        }
    });
});

// Обработчик нажатия на кнопку "вниз"
const downButton = document.querySelector('.down-button');
downButton.addEventListener('click', () => {
    // Находим все маленькие фотографии и активную фотографию
    const smallImages = document.querySelectorAll('.small-image');
    const activeImage = document.querySelector('.small-image.active');
    // const firstImage = document.querySelector('#first-image')

    // Находим индекс активной фотографии
    const activeIndex = Array.from(smallImages).indexOf(activeImage);

    // Если активная фотография не последняя, выбираем следующую
    if (activeIndex < smallImages.length - 1) {
        const newActiveImage = smallImages[activeIndex + 1];

        // Заменяем большую фотографию на новую активную
        const bigImage = document.querySelector('.big-image');
        bigImage.src = newActiveImage.dataset.src;

        // Убираем выделение с предыдущей активной фотографии и добавляем на новую
        activeImage.classList.remove('active');
        newActiveImage.classList.add('active');

        // Проверяем, является ли новая активная фотография последней и скрываем/показываем кнопку "вниз"
        if (activeIndex + 2 === smallImages.length) {
            downButtonHidden()
            // upButton.style.display = 'block'; // если кнопка была скрыта, показываем её обратно
            upBtnVisible()
        } else {
            downBtnVisible()
        }

        // Показываем кнопку "вверх"
        upBtnVisible()
    }

    if (downButton.style.display === 'block' && upButton.style.display === 'block') {
        editPaddingLess()
    } else {
        editPaddingLarge()
    }
});

// Обработчик нажатия на кнопку "вверх"
const upButton = document.querySelector('.up-button');
upButton.addEventListener('click', () => {
    // Находим все маленькие фотографии и активную фотографию
    const smallImages = document.querySelectorAll('.small-image');
    const activeImage = document.querySelector('.small-image.active');

    // Находим индекс активной фотографии
    const activeIndex = Array.from(smallImages).indexOf(activeImage);

    // Если активная фотография не первая, выбираем предыдущую
    if (activeIndex > 0) {
        const newActiveImage = smallImages[activeIndex - 1];

        // Заменяем большую фотографию на новую активную
        const bigImage = document.querySelector('.big-image');
        bigImage.src = newActiveImage.dataset.src;

        // Убираем выделение с предыдущей активной фотографии и добавляем на новую
        activeImage.classList.remove('active');
        newActiveImage.classList.add('active');

        // Проверяем, является ли новая активная фотография первой и скрываем/показываем кнопку "вверх"
        if (activeIndex - 1 === 0) {
            upBtnHidden()

        } else {
            upBtnVisible()
        }

        // Показываем кнопку "вниз"
        downBtnVisible()
    }

    if (downButton.style.display === 'block' && upButton.style.display === 'block') {
        editPaddingLess()
    } else {
        editPaddingLarge()
    }
});

function upBtnVisible() {
    upButton.style.display = 'block'
}

function upBtnHidden() {
    upButton.style.display = 'none'
}

function downBtnVisible() {
    downButton.style.display = 'block'
}

function downButtonHidden() {
    downButton.style.display = 'none'
}

function editPaddingLess() {
    upButton.style.paddingBottom = '1rem';
    upButton.style.paddingTop = '1rem';
    downButton.style.paddingBottom = '1rem';
    downButton.style.paddingTop = '1rem';
    columnImages.style.gap = '2rem'
}

function editPaddingLarge() {
    upButton.style.paddingBottom = '3rem';
    upButton.style.paddingTop = '3rem';
    downButton.style.paddingBottom = '3rem';
    downButton.style.paddingTop = '3rem';
    columnImages.style.gap = '2.5rem'
}