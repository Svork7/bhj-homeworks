const products = Array.from(document.querySelectorAll('div.product'))

const addition = document.querySelectorAll('div.product__quantity-control_inc')
// прибавление

const removal = document.querySelectorAll('div.product__quantity-control_dec')
//убавление

const qty = document.querySelectorAll('.product__quantity-value')
//значение

removal.forEach(function (item, index) {
  item.onclick = function () {
    if (parseInt(qty[index].innerText) > 1) {
      let removeItem = parseInt(qty[index].innerText)
      removeItem--
      qty[index].innerText = removeItem
    }
  }
})

addition.forEach(function (item, index) {
  item.onclick = function () {
    if (parseInt(qty[index].innerText) >= 1) {
      let addItem = parseInt(qty[index].innerText)
      addItem++
      qty[index].innerText = addItem
    }
  }
})

const btn = Array.from(document.querySelectorAll('.product__add'))
console.log(btn)

const cartProducts = document.querySelector('.cart__products')

btn.forEach((add) => {
  add.addEventListener('click', () => {
    addCart(add)
  })
})
function addCart(element) {
  const id = element.closest('.product').dataset.id
  const image = element.closest('.product').querySelector('.product__image')

  const cartProductvalue = cartProducts.querySelector(
    `.cart__product[data-id="${id}"] .cart__product-count`
  )

  const productvalue = element
    .closest('.product')
    .querySelector('.product__quantity-value').innerText

  if (cartProductvalue) {
    cartProductvalue.innerText =
      Number(cartProductvalue.innerText) + Number(productvalue)
  } else {
    const cartDiv = document.createElement('div')
    cartDiv.className = 'cart__product'
    cartDiv.dataset.id = id
    cartDiv.innerHTML = `<img class="cart__product-image" src="${image.src}">
                            <div class="cart__product-count">${productvalue}</div>`
    cartProducts.appendChild(cartDiv)
  }
}
