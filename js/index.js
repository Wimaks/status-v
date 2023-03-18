// let button = document.querySelector('.footer-image');
// let card = document.querySelector('.catalog__card');
// let discount = document.querySelector('.footer-discount')
// let btnText = '<span>Купить</span>';
// let btnImage = '<img src="src/img/buy.svg" id="button-image" alt="Корзина">';

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