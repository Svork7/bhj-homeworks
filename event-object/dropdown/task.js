const dropdownList = document.querySelector('.dropdown__list '),
dropdownValue  = document.querySelector('.dropdown__value '),
dropdownItem =  Array.from(document.querySelectorAll('.dropdown__item'));

function dClick (){
  dropdownList.classList.toggle('dropdown__list_active');
}

function select (event) {
  event.preventDefault();
  dropdownValue.textContent = event.target.textContent;
  dropdownList.classList.remove('dropdown__list_active');   
  }
  

dropdownValue.addEventListener('click', dClick)
dropdownList.addEventListener('click', select)

/*dropdownValue.onclick = function  (){
    dropdownList.classList.toggle('dropdown__list_active');
}
*/




/*const buttonClose = document.querySelectorAll(".modal__close");
buttonClose[0].onclick = () => modal.classList.remove("modal_active");

const modalSuccess = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");
showSuccess.onclick = () => {
  modalSuccess.classList.add("modal_active");
  modal.classList.remove("modal_active");
}

buttonClose[2].onclick = () => modalSuccess.classList.remove("modal_active");*/
