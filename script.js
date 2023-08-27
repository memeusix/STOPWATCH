var timer = document.querySelector(`.timer_display`)
var start_btn = document.getElementById(`start_btn`)
var stop_btn = document.getElementById(`stop_btn`)
var reset_btn = document.getElementById(`reset_btn`)

let startTime = Date.now();
let intervalId;

function timer_display(){
    const currentTime= Date.now() - startTime
    const minuts = Math.floor(currentTime / 60000);
    const second = Math.floor((currentTime % 60000) / 1000);
    const mlsecond = Math.floor((currentTime % 1000) / 10);

    timer.textContent = `${minuts.toString().padStart(2 , '0')}:${second.toString().padStart(2,'0')}:${mlsecond.toString().padStart(2,'0')}`
}

function start_timer(){
    startTime = Date.now();
    intervalId = setInterval(timer_display, 10);
    start_btn.disabled =true;
    stop_btn.disabled = false;
    soundplay()
}

function stop_timer(){
    clearInterval(intervalId);
    start_btn.disabled = false;
    stop_btn.disabled = true;
    clearInterval(audio_interval)
}

function reset_timer(){
    clearInterval(intervalId);
    start_btn.disabled = false;
    stop_btn.disabled = false;
    timer.textContent = `00:00:00`;
    clearInterval(audio_interval)
}

start_btn.addEventListener(`click`,start_timer);
stop_btn.addEventListener(`click`,stop_timer);
reset_btn.addEventListener(`click`,reset_timer);



var crsr = document.querySelector(`.crsr`)

document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})


var  audio_interval;
var sfx = new Audio("click_audio.mp3")

function soundplay(){
    audio_interval = setInterval(() => {
        sfx.play();
    }, 1000);
}


gsap.to(`.welcome`,{
    top : `-100vh`,
    duration : 1,
    delay:2
})
