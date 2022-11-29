let toolips = Array.from(document.querySelectorAll('a.has-tooltip'))
let divNew = document.createElement('div')

function add_tip(index) {
  let divNew = document.createElement('div')
  divNew.classList.add('tooltip')
  divNew.innerText = toolips[index].title
  toolips[index].appendChild(divNew)
  let coordinates = toolips[index].getBoundingClientRect()
  console.log(coordinates)
  divNew.style = `left: ${coordinates.left + 5}px; top: ${
    coordinates.top - 20
  }px;`
}

for (let i = 0; i < toolips.length; i++) {
  add_tip(i)

  let toolip = toolips[i].querySelector('.tooltip')

  toolips[i].addEventListener('click', function (evtent) {
    evtent.preventDefault()
    if (toolip.classList.contains('tooltip_active')) {
      toolip.classList.remove('tooltip_active')
    } else {
      toolips.forEach((element) =>
        element.querySelector('div.tooltip').classList.remove('tooltip_active')
      )
      toolip.classList.add('tooltip_active')
    }
  })

  window.addEventListener('scroll', function () {
    toolip.classList.remove('tooltip_active')
  })
}
