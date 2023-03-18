// СЧЕТЧИК КОЛ-ВО ПРОДУКТА

let countEl = document.querySelector(".product-count");
const decrementBtn = document.querySelector("#button-dec");
const incrementBtn = document.querySelector("#button-inc");
let count = 1;

function updateCount() {
    countEl.innerText = count;
    if (count === 1) {
        decrementBtn.disabled = true;
    } else {
        decrementBtn.disabled = false;
    }
}

decrementBtn.addEventListener("click", function () {
    count--;
    updateCount();
});

incrementBtn.addEventListener("click", function () {
    count++;
    updateCount();
});

updateCount();