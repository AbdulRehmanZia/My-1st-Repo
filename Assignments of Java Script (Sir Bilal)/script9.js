let arr = [1, 2, 3, 4, 5, 6];
let modifiedArr = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    modifiedArr.push(arr[i] * 2);
  }
}
console.log(modifiedArr); // Output: [4, 8, 12]

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6, 7, 8];
let commonElements = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      commonElements.push(arr1[i]);
    }
  }
}
console.log(commonElements); // Output: [4, 5]

let num = 17;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}
console.log(isPrime); // Output: true

let nestedArr = [[1, 2], [3, 4], [5, 6]];
let flattenedArr = [];
for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    flattenedArr.push(nestedArr[i][j]);
  }
}
console.log(flattenedArr); // Output: [1, 2, 3, 4, 5, 6]