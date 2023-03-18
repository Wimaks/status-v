document.addEventListener('DOMContentLoaded', function () {

    // КОЛ-ВО ПОКАЗЫВАЕМЫХ ТОВАРОВ НА СТРАНИЦЕ

    // get the buttons
    const show12Btn = document.querySelector('#show-12');
    const show24Btn = document.querySelector('#show-24');
    const show36Btn = document.querySelector('#show-36');

    const buttons = document.querySelectorAll('.catalog__description-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Удаляем класс active у всех кнопок
            buttons.forEach(function (button) {
                button.classList.remove('active');
            });
            // Добавляем класс active выбранной кнопке
            this.classList.add('active');
        });
    });

    // get the product grid
    const catalog = document.querySelector(".catalog__body");


    // const hideProducts = () => {
    //     const productItems = catalog.querySelectorAll(".catalog__card");
    //     const productItemsArray = Array.from(productItems);

    // }


    // hide all product items
    const hideAllProductItems = () => {
        const productItems = catalog.querySelectorAll(".catalog__card");
        const productItemsArray = Array.from(productItems);
        productItemsArray.forEach(item => {
            item.style.display = "none";
        });
        // console.log(productItemsArray);
    };

    // show the specified number of product items
    const showProductItems = (num) => {
        hideAllProductItems();
        const productItems = catalog.querySelectorAll(".catalog__card");
        const productItemsArray = Array.from(productItems);
        for (let i = 0; i < num; i++) {
            productItemsArray[i].style.display = "block";
        }

    };

    showProductItems(12);
    // set up event listeners for the buttons
    show12Btn.addEventListener("click", () => {
        showProductItems(12);
    });

    show24Btn.addEventListener("click", () => {
        showProductItems(24);
    });

    show36Btn.addEventListener("click", () => {
        showProductItems(36);
    });

    if (window.innerWidth < 575) {
        show12Btn.textContent = '6'
        show24Btn.textContent = '12'
        show36Btn.textContent = '24'

        showProductItems(6);

        show12Btn.addEventListener("click", () => {
            showProductItems(6);
        });

        show24Btn.addEventListener("click", () => {
            showProductItems(12);
        });

        show36Btn.addEventListener("click", () => {
            showProductItems(24);
        });
    }


    // const hiddenCards = catalog.querySelectorAll('.catalog__card[style*="display: none"]')

    // // console.log(hiddenCards);

    // const data = [];
    // hiddenCards.forEach(element => {
    //     data.push({
    //         html: element.outerHTML,
    //         css: getComputedStyle(element).cssText
    //     });
    // });

    // localStorage.setItem('hiddenCards', JSON.stringify(data));
})

