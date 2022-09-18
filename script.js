// Assignment Code
var generateBtn = document.querySelector("#generate")

var numberChars = ["0123456789"];
var upperChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChars = ["abcdefghijklmnopqrstuvwxyz"];
var specialChars = ["!@#$%^&*()_-+={[}]|:;'<>/?"];
var allChars = "";



function generatePassword() {
  let generatedPassword = "";

  var passwordLength = parseInt(prompt("How long would you like your password to be in terms of Characters?"))
  // If password is within peramiters
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters")
    return "Password must be between 8 and 128 characters";
  }
  
  
  allChars = []
  var checkOne = confirm("Would you like to use special Characters?");
  if (checkOne) {
    allChars += specialChars;

  }
  var checkTwo = confirm("Would you like to use uppercase letters?");
  if (checkTwo) {
    allChars += upperChars;

  }
  var checkThree = confirm("Would you like to use lowercase letters?");
  if (checkThree) {
    allChars += lowerChars;
  }

  var checkFour = confirm("Would you like to use numbers?");
  if (checkFour) {
    allChars += numberChars;
  }
  if (allChars.length === 0) { return "Needs to be between 8 and 128 characters" }
 

  for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * allChars.length);
    generatedPassword += allChars.substring(randomNumber, randomNumber + 1);
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



