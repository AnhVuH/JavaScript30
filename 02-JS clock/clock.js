const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function setTime(){
  const now = new Date();
  const hours = now.getHours();
  const mins = now.getMinutes();
  const seconds = now.getSeconds();

  const secondsDegres = (seconds/60)*360 +90;
  const minsDegres = (mins/60)*360 + 90;
  const hoursDegres = (hours/12)*360 +90;

  if(secondsDegres!=90) secondHand.style.transform= `rotate(${secondsDegres}deg)`;
  else  secondHand.style.transform= `rotate(90deg)`;
  minHand.style.transform= `rotate(${minsDegres}deg)`;
  hourHand.style.transform= `rotate(${hoursDegres}deg)`;
  // console.log(secondsDegres);
}


setInterval(setTime, 1000);
