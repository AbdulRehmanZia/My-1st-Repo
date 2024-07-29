// printing num 1-10

for (i = 1; i <= 10; i++) {
  console.log("The nber is: " + i);
}

// printing even num 1-20

for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log("Even Number : " + i);
  }
}

for (i = 1; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log("Odd number:" + i);
  }
}

// Calculating Factorial

let factorial = 1;
for (let i = 1; i <= 5; i++) {
  factorial *= i;
}
console.log(factorial);

// Printing 7th table

for (i = 1; i <= 10; i++) {
  console.log(7 * i);
}

// Printing Reverse Array

let string = "Hello";
let reversedString = "";
for (
  i = string.length - 1;
  i >= 0;
  i-- // Yahan -1 is liye kra cuz string ki length 5 he aur index 4 he
) // so condition length se check horahi
{
  reversedString = reversedString + string[i];
}
console.log(reversedString);

// Calculating Smallest Value in an Array

var numbers = [3,7,9,2,4,]
var smallestNum = 999
for(i=0; i<numbers.length; i++)
{
    if (numbers[i] <smallestNum)
    {
        smallestNum= numbers[i]
    }
}
console.log(smallestNum);

// Printing Squares of nums 1-10

for (var i=1; i<=10; i++)
{
    console.log('The sqaure of '+i+ ' is ' + i*i);
}

// Printing Fibonacci series

let a = 0;
let b = 1;
console.log(a);
console.log(b);
for (let i = 0; i <= 10; i++) {
  let c = a + b;
  console.log(c);
  a = b;
  b = c;
}
