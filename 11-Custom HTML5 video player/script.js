// Get elements
const video = document.querySelector(".viewer");

const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const toggleButton = document.querySelector(".toggle");

const ranges = document.querySelectorAll(".player__slider");
const skipButtons = document.querySelectorAll("[data-skip]")

// Build functions
// 1. Play or pause video when click on toggle button or on video
function toggle(){
  // const method = video.paused ? 'play' : 'pause' ;
  // video[method]();
  video.paused ? video.play() : video.pause();
}

//2.Update icon of play button
function updateButton(){
  const icon = video.paused ? '►' : '▌▌';
  // toggleButton.innerHTML = icon;
  toggleButton.textContent = icon; //textContent has better performance because its value is not parsed as HTML. Moreover, using textContent can prevent XSS attacks
}

//3. change progress bar synchronous with video
function handleProgress(){
  progressBar.style.flexBasis = `${video.currentTime/video.duration * 100}%`;
}

function handleRange(){
  video[this.name] = this.value;
}

function handleSkip(){
  // console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleScrub(e){
  video.currentTime = (e.offsetX/progress.offsetWidth) *video.duration;
}

// Hook up the event listeners
toggleButton.addEventListener('click',toggle);
video.addEventListener('click',toggle);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
video.addEventListener('timeupdate',handleProgress);

ranges.forEach(range => range.addEventListener('change', handleRange));
ranges.forEach(range => range.addEventListener('mousemove', handleRange));

skipButtons.forEach(button =>button.addEventListener('click',handleSkip));

let scrub = false;

progress.addEventListener('click',handleScrub);
progress.addEventListener('mousedown', ()=>scrub= true);
progress.addEventListener('mouseup', ()=>scrub= false);
progress.addEventListener('mousemove',(e)=>{
  if(scrub){
    handleScrub(e);
  }
})
