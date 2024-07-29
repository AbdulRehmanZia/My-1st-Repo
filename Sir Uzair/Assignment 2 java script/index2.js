var age = prompt("Hey! Please enter your age");
if (age < 12) {
  alert("The ticket price is $5");

} else if (age >= 12 && age <= 18) {
  var student = confirm(
    'Tell me are you a student? Click "ok" for YES and "cancel" for NO'
  );
  
  if (student) {
    alert("The ticket price is $8");
  } else {
    alert("The the ticket price is $10");
  }
} else {
  alert("The ticket price is $12");
}
