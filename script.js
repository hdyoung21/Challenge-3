// Assignment Code
var generateBtn = document.querySelector("#generate")

var numberChars = [0123456789];
var upperChars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerChars = ["abcdefghijklmnopqrstuvwxyz"];
var specialChars = ["!@#$%^&*()_-+={[}]|:;'<>/?"];
var allChars = "";


function generatePassword(){


  var passwordLength = prompt("How long would you like your password to be in terms of Characters?");
  // If password is within peramiters
  // if (passwordLength < 8 || passwordLength > 128)
  // alert("Password must be between 8 and 128 characters")
  // return false;
  console.log(allChars);

var checkOne = confirm("Would you like to use special Characters?");
if (checkOne === true) {
  allChars += specialChars;
 
}
var checkTwo = confirm("Would you like to use uppercase letters?");
if (checkTwo === true) {
allChars += upperChars;

}
var checkThree = confirm("Would you like to use lowercase letters?");
if (checkThree === true) {
allChars += lowerChars;
}

var checkFour = confirm("Would you like to use numbers?");
if (checkFour === true) {
  allChars += numberChars;
}

for (var passwordLength = ) {

}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



