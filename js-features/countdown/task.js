const timer = document.getElementById("timer");
const time = setInterval (() => {
    
    timer.textContent --;
    if (timer.textContent == 0) {
        clearInterval (time);
        alert("Вы победили в конкурсе!");
    }
},1000);