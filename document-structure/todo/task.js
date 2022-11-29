const inputTask = document.getElementById('task__input')
const addTask = document.getElementById('tasks__add')
const listTask = document.querySelector('.tasks__list')

addTask.addEventListener('click', addTasks) // вывод на страницу

function addTasks(event) {
  event.preventDefault() //  отменяет действия на странице по умолчанию

  let task = inputTask.value.trim()

  if (task != '') {
    // если строка инпута не содержит пустую строку, то все что ниже вставлем на страницу
    listTask.insertAdjacentHTML(
      `beforeEnd`,
      `<div class = "task">
        <div class = "task__title"> ${task} </div> 
        <a href = "#"
        class = "task__remove">&times;</a> </div>`
    )
    inputTask.value = `` //  очистить строку ввода
  }

  const removeTask = (element) => {
    element.target.closest('.task').remove()
  }

  const taskDel = Array.from(document.querySelectorAll('.task__remove'))

  taskDel.forEach((element) => {
    element.addEventListener('click', removeTask)
  })
}
