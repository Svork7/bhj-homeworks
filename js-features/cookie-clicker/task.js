

const image = document.getElementById("cookie");  
const counter = document.getElementById("clicker__counter");

image.onclick = () => {
  clicker__counter.textContent++;
  if (counter.textContent % 2 === 0) {
    image.width = 230;
  }
  else {
    image.width = 200;
  }
}