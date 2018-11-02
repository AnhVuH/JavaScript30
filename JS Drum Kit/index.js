document.addEventListener('keydown', (event)=>{
  const key = document.querySelector(`div[data-key ="${event.key}"]`);  // use `` not single quote or double quote for template string allowing embedded expressions
  const audio = document.querySelector(`audio[data-key = "${event.key}"]`)

  if(!key) return null;
  key.classList.add("playing");

  if(!audio) return;
  audio.currentTime= 0 ;// rewind to start
  audio.play();

});

const listKeys = document.querySelectorAll("div[data-key]");

//anonymous function
listKeys.forEach (key => key.addEventListener("transitionend",(event)=> {
//listKeys.forEach (key => key.addEventListener("transitionend",function(event){ // use to avoid "this" error
  // console.log(event); transition events include transform, change border color, box-shadow with difference propertyNames]
  // console.log(this);
  if(event.propertyName !== "transform") return;
  key.classList.remove("playing");
  // this.classList.remove("playing"); //==> error, when use ES6 arrow function
  //because arrow functions don't provide their own "this" => it retains the this value of the enclosing lexical context = "window object"
})
);

//named function
// listKeys.forEach(key => key.addEventListener("transitionend",removeTransition))
//
// function removeTransition(event){
//   if(event.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }
