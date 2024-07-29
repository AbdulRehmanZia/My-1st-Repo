// let tds = document.querySelectorAll('td');
// for (let i = 0; i < tds.length; i++) {
//   tds[i].innerText = 'Hello World';
// }

let tds = document.querySelectorAll('td');
let count = 1; 
for (let i = 0; i < tds.length; i++) {
  tds[i].innerText = count; 
  count++; 
}