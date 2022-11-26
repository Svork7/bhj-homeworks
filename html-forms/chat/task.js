const chatWidgetSide = document.querySelector(`.chat-widget__side`)
const chatWidget = document.querySelector(`.chat-widget`)
const input = document.querySelector('.chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')
chatWidgetSide.addEventListener('click', showChat)

const botMessage = [
  'Добрый день!',
  'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
  'Кто тут?',
  'Где ваша совесть?',
  'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
  'До свидания!',
]

let hours = new Date().getHours()
let minutes = new Date().getMinutes()

function showChat() {
  chatWidget.classList.toggle('chat-widget_active')
}

input.addEventListener('change', sendMessage)

function sendMessage(event) {
  if (input.value) {
    messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">${input.value}</div>
    </div>
  `
  } else {
    event.preventDefault
  }

  botSays(botMessage)
  console.log(input.value)
  input.value = ''
}

function botSays(answer) {
  const random = Math.floor(Math.random() * answer.length)
  return (messages.innerHTML += `
    <div class="message">
      <div class="message__time">${hours}:${minutes}</div>
      <div class="message__text">${answer[random]}</div>
    </div>
    `)
}
