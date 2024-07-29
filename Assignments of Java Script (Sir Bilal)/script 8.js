//User Full Name with 1st Capital Letter 

let userInput = prompt("Enter your First name");
let userInput2 = prompt("Enter your Last Name");
let fullName = userInput[0].toUpperCase()+ userInput.slice(1)+" "+userInput2[0].toUpperCase() + userInput2.slice(1);
alert("Hey!"+" "+fullName);

//Sentence Length

let favPhone = prompt("Which is your favourite Phone. Write in Sentence")
let favPhoneLength = favPhone.length
alert("Your Sentence length is" + " " + favPhoneLength)

//Find 'n' in Pakistan

let word = "Pakistan"
for (let i=0; i<word.length; i++){
    if (word.slice(i, i+1)==="n"){
        alert("n in Pakistan is on" + " " + i + " "+ "index")
        break
    }
}

//Last Index of "L" in Hello World

let word2 = "Hello World!"
let indexOfL= word2.lastIndexOf("l")
alert("Last index of l in Hello World is" + " " + indexOfL)

