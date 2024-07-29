// pop, push, shift & un-shift

var fruits =['apple', 'banana', 'orange', 'grape']
console.log(fruits)
fruits.pop()
console.log("Fruit Sold! This is updated list. " + fruits)
var newFruit = prompt("enter new fruit" )
fruits.push(newFruit)
console.log(fruits)
fruits.shift()
var newShipFruit = prompt("Enter the name of fruit")
fruits.unshift(newShipFruit)
console.log(fruits)

// Slice & Splice

var numbers =[1,2,3,4,5,6,7,8,9,10]
numbers.length
var remove = prompt(numbers + " which number do you wanna remove? Tell the number behind it. Reply in integer")
numbers.splice(remove,1)
console.log(numbers)
alert(numbers)

 alert('Now tell the starting and ending index you wanna extract'+ ' ' + numbers)
 var slice1= prompt('Enter starting index')
 var slice2= prompt('Enter ending index')
var slice3= numbers.slice(slice1,slice2) 
alert("Here are your numbers " + slice3)

var sum = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
var average = sum / numbers.length;
console.log("The average of the numbers is:", average);

