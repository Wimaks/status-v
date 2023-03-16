$(document).ready(function () {
    //* POPUP

    $('.popup-link').on('click', function (event) {
        event.preventDefault();

        $('.popup').toggleClass('active')
    })

    $('.popup__close').on('click', function (event) {
        event.preventDefault();

        $('.popup').removeClass('active')
        $('.popup__content').removeClass('_sending')
        $('#form').trigger("reset");
        $('.popup__form-input').removeClass('_error')
    })
})