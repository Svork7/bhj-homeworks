const ulInterests = document.querySelectorAll('ul.interests_active')
//console.log(ulInterests);

ulInterests.forEach(function (item) {
  let firstCheck = item.closest('li')
  //console.log(firstCheck);
  firstCheck = firstCheck.firstElementChild.querySelector('input')
  let secondChecks = item.querySelectorAll('li > label > input')
  console.log(secondChecks)

  firstCheck.onclick = function () {
    if (firstCheck.checked == true) {
      firstCheck.checked = true
      secondChecks.forEach(function (item) {
        item.checked = true
      })
    }

    if (firstCheck.checked == false) {
      firstCheck.checked = false
      secondChecks.forEach(function (item) {
        item.checked = false
      })
    }
  }
})
