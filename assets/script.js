// Set variables
//On click event for button to generate prompt
//Prompt for choosing character amount
//Confirm Lowercase Uppercase numeric and or special chars.
//EACH PROMPT NEEDS TO BE VALIDATED boolean???
//Limit of one option needs to be selected
//Result needs to be prompt or appear on page

var characterAmount;
var upperCase;
var lowerCase;
var specialCase;
var upper = ["A", "B", "C", "D", "E", "F"];
var lower = ["f", "g", "h", "i", "j", "k"];
var special = ["!", "@", "$", "2", "7", "9"];

var generateBtn = document.querySelector("#generate");

function characterCount() {
  characterAmount = prompt(
    "Please choose between 8-128 characters for your password",
    "20"
  );
  if (characterAmount < 8 || characterAmount > 128) {
    alert("Please pick a valid amount");
    return;
  } else {
    specifications();
  }
}

function specifications() {
  upperCase = confirm("Would you like to include Uppercase?");
  lowerCase = confirm("Would you like to include Lowercase?");
  specialCase = confirm(
    "Would you like to include Numeric and Special characters?"
  );

  if (upperCase !== true && lowerCase !== true && specialCase !== true) {
    alert("Please choose at least one option.");
    specifications();
  } else {
    password();
  }
}

function password() {
  var truespecs = upperCase + lowerCase + specialCase;
  var divider = characterAmount / truespecs;
  var generated = [];
  if (upperCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * upper.length);
      var randomValue = upper[randomIndex];
      generated.push(randomValue);
    }
  }
  if (lowerCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * lower.length);
      var randomValue = lower[randomIndex];
      generated.push(randomValue);
    }
  }
  if (specialCase) {
    for (let i = 0; i < divider; i++) {
      var randomIndex = Math.floor(Math.random() * special.length);
      var randomValue = special[randomIndex];
      generated.push(randomValue);
    }
  }
  shuffleArray(generated);
}

function shuffleArray(generated) {
  for (var i = generated.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = generated[i];
    generated[i] = generated[j];
    generated[j] = temp;
  }
  var password = generated.join("");
  writePassword(password);
}

function writePassword(password) {
  var passwordText = document.getElementById("password");
  passwordText.innerText = password;
}

generateBtn.addEventListener("click", characterCount);
