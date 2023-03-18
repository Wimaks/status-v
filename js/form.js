"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const popup = document.querySelector('.popup__content')
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            popup.classList.add('_sending');
            // let response = await fetch('sendmail.php', {
            //     method: 'POST',
            //     body: formData
            // });
            // if (response.ok) {
            //     let result = await response.json();
            //     alert(result.message);
            //     formPreview.innerHTML = '';
            //     form.reset();
            //     form.classList.remove('_sending');
            // } else {
            //     alert("Ошибка");
            //     form.classList.remove('_sending');
            // }
        } else {
            alert('Вы не заполнили поля или неверно заполнили');
        }

    }


    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    //Функция теста email
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});

// Получаем элемент textarea
var textarea = document.querySelector("#product__textarea");

// Устанавливаем начальную высоту textarea
textarea.style.height = "auto";

// Устанавливаем максимальную высоту textarea
textarea.style.maxHeight = "500px";

// Функция для изменения высоты textarea
function adjustTextareaHeight() {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
}

// Вызываем функцию при вводе текста в textarea
textarea.addEventListener("input", adjustTextareaHeight);