// script.js
 let timerVisual=document.querySelector('.timerDisplay');
 let SBtn=document.getElementById('stopBtn');
 let resetBtn=document.getElementById('resetBtn');
 let startBtn=document.getElementById('startBtn');

 // let a minutes seconds and miliSeconds intial value
 let minutes=00;
 let seconds=00;
 let miliSeconds=00;
 
 let timerId=null;

 //Press Start Button and working on event Listener

 startBtn.addEventListener('click',function(){
    if(timerId !==null){
        clearInterval(timerId);
    }
  timerId= setInterval(startTimer,10); 
 })

 SBtn.addEventListener('click',function(){
    clearInterval(timerId)
 })

// For Reset button setup
 resetBtn.addEventListener('click',function(){
    clearInterval(timerId);
    timerVisual.innerHTML=`00 : 00 : 00`
    miliSeconds=seconds=minutes=00;
 })

 // For Timer start
 function startTimer(){
  miliSeconds++;
  if(miliSeconds==100){
    miliSeconds=0;
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
    }
  }

let msecString=miliSeconds < 10 ? `0${miliSeconds}`:miliSeconds;
let secsString=seconds<10 ? `0${seconds} `: seconds;
let minsString=minutes<10 ? `0${minutes}` : minutes;
 

  timerVisual.innerHTML=`${minsString} : ${secsString} : ${msecString}`
}
