var age = prompt(
  "Hey! Assalamualaikum. Please enter your age to get the best package"
);
if (age < 12) {
  alert("The ticket price is $$5");
} else if (age >= 12 && age <= 18) {
  var student = prompt("And are you a student? Reply in yes/no");
  if (student == "yes") {
    alert("The ticket price is $8");
  } else {
    alert("The ticket price is $10");
  }
} else {
  alert("The ticket price is $12");
}
