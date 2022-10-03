const dropdownList = document.querySelector('.dropdown__list ')
const dropdownValue  = document.querySelector('.dropdown__value ')
const dropdownItem =  Array.from(document.querySelectorAll('.dropdown__item'));

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

