const burger = document.querySelector(".burger_menu");
const navbar_menu = document.querySelector(".navbar_menu");
const btnInfo = document.querySelector(".btn_info");
const btnInfoExit = document.querySelector(".btn_info_exit");
const btnInfoContent = document.querySelector(".btn_info__content");

burger.addEventListener('click', (e) => {
    navbar_menu.classList.toggle("change");
    setTimeout(() => {
        burger.className.includes("fa-bars") ? burger.classList.toggle("fa-times") : null;
    }, 250)
})

btnInfo.addEventListener("click", () => {
    btnInfoContent.style.display = "flex";
    btnInfo.style.display = "none";
})

btnInfoExit.addEventListener("click", () => {
    btnInfoContent.style.display = "none";
    btnInfo.style.display = "block";
})