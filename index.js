const adviceText = document.querySelector(".body span"),
adviceId = document.querySelector(".heading span"),
adviceBtn = document.querySelector(".dice");


function randomAdvice(){
    fetch("https://api.adviceslip.com/advice").then((res) => res.json()).then(result =>{
       adviceText.innerText = result.slip.advice;
       adviceId.innerText = result.slip.id;
    });
}

adviceBtn.addEventListener("click", randomAdvice);

