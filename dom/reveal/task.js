const reveal = document.querySelectorAll("div.reveal");

window.onscroll = function () {
  for (let i = 0; i < reveal.length; i++) {
    let { top, bottom } = reveal[i].getBoundingClientRect();
    if (top < window.innerHeight) {
      reveal[i].classList.add("reveal_active");
      console.log(reveal[i]);
    }
    if (bottom < 0) {
      reveal[i].classList.remove("reveal_active");
    }
  }
};
