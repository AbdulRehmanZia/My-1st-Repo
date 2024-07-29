// var userNum = document.getElementById("box")
// var UserNumValue = userNum.value
// var result = document.getElementsByClassName("resultbox")
// var resultValue = result.value
// var h1 = document.getElementsByClassName("h1")
// var h2 = document.getElementsByClassName("h2")


// function checkNum(num){
//    var generatedNum = Math.ceil(Math.random()*6)
//    h1.innertext = generatedNum
//    h2.innertext = num
//    if(num == generatedNum){
//       result.innertext = "You Won! Your Num=" + UserNumValue + " and the generated num=" + generatedNum
//    }else{
//       result.innertext = "You Lost! Your Num=" + UserNumValue + " and the generated num= " + generatedNum
//    }
// }


// //Calculating Years form 1st january 1970-now


var userNum = document.getElementsByClassName("box").value
var h1 = document.getElementsByClassName("h1")
var h2 = document.getElementsByClassName("h2")
function generateNum(num) {
randomNum = Math.ceil(Math.random()*6)
h1.innerText = randomNum
h2.innerText = num
if(randomNum = num){
    
}
}