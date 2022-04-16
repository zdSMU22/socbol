//Modal
var aboutUsModal = document.getElementById("aboutUs");
var modalBg = document.querySelector(".modal-background");
var modal = document.querySelector(".modal");
var exitBtn = document.getElementById("exitBtn");
var exitBtn2 = document.getElementById("deleteBtn");

aboutUsModal.addEventListener("click", () => {
    modal.classList.add("is-active");
});

modalBg.addEventListener("click", () => {
    modal.classList.remove("is-active");
})

exitBtn.addEventListener("click", () => {
    modal.classList.remove("is-active");
})

exitBtn2.addEventListener("click", () => {
    modal.classList.remove("is-active");
})