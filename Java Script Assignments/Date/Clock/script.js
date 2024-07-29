let hours = document.getElementById("hours")
let mins = document.getElementById("mins")
let seconds = document.getElementById("seconds")

let timeInterval;
function StartTime(){
    timeInterval = setInterval(function () {
    let date = new Date()
 hours.innerText = date.getHours()+":"
 mins.innerText = date.getMinutes()+":"
seconds.innerText = date.getSeconds()
},1000)
}

function StopTime() {
    clearInterval(timeInterval)
}