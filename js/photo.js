// Получаем элементы изображений
const smallImages = document.querySelectorAll('.small-image');
const bigImage = document.querySelector('.big-image');

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
    });
});

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
    } else {
        // Если активная фотография последняя, выбираем первую фотографию
        const newActiveImage = smallImages[0]

        // Заменяем большую фотографию на новую активную
        const bigImage = document.querySelector('.big-image');
        bigImage.src = newActiveImage.dataset.src;

        // Убираем выделение с предыдущей активной фотографии и добавляем на новую
        activeImage.classList.remove('active');
        newActiveImage.classList.add('active');
    }
});