// var currentDate = new Date()
// console.log(currentDate);
//  var MiliSecondsFrom1970 = currentDate.getTime()
//  console.log(MiliSecondsFrom1970);
//  var paperDate = new Date()
// paperDate.setDate(28)
// paperDate.setMonth(4)

//  var MiliSecondsFrom1970_Paper = paperDate.getTime()
//  console.log(MiliSecondsFrom1970_Paper);

//  var paperDate = MiliSecondsFrom1970_Paper - MiliSecondsFrom1970
//  console.log(paperDate/86400000);


// let todaysDate = new Date()
// console.log(todaysDate);

// let MiliSecondsTillNow = todaysDate.getTime()
// console.log(MiliSecondsTillNow);

// var Years_Till_2070 = new Date()
// Years_Till_2070.setFullYear(2070)
// var MiliSecondsFrom1970_2070 = Years_Till_2070.getTime()
// console.log(MiliSecondsFrom1970_2070);
// varY

var hours = document.getElementById("hours")
var mins = document.getElementById("mins")
var seconds = document.getElementById("seconds")

var time = setInterval(function() {
    let date = new Date()
    hours.innerText = date.getHours()
    mins.innerText = date.getMinutes()
    seconds.innerText = date.getSeconds()
}, 1000)

 
