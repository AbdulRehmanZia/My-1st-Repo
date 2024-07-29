// Parameters
// function sum (a,b) {
//     let total = a + b
//     return total
// }
// console.log(sum(12, 9));


function check(num) {
    if (num%2 === 0) {
        return true
        console.log(true);
    }
    else {
        return false 
        console.log(false);

    } 
}

console.log("check",check()); 

var user_input = document.getElementById("input")
var user_output = document.getElementById("output")

function checkNum() {
    var num = user_input.value
    console.log(num);
    if(check(num)) {user_output.innerText = "The Number Is Even"}
    else {user_output.innerText = "The Number Is Odd"}
}