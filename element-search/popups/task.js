const modal = document.getElementById("modal_main");
modal.classList.add("modal_active");

const buttonClose = document.querySelectorAll(".modal__close");
buttonClose[0].onclick = () => modal.classList.remove("modal_active");

const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");
showSuccess.onclick = () => {
  modalSuccess.classList.add("modal_active");
  modal.classList.remove("modal_active");
}

buttonClose[2].onclick = () => modalSuccess.classList.remove("modal_active");