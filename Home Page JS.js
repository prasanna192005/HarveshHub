const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

const newYears = "1 May 2024"; // Changed date to May 1st, 2024
var cursor=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets){
    console.log(dets)
    cursor.style.left=dets.x+"px"
    cursor.style.top=dets.y+"px"
})
document.addEventListener("mousemove",function (dets){
    console.log(dets)
    blur.style.left=dets.x-45+"px"
    blur.style.top=dets.y-45+"px"
})
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);
