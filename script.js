

// generate random characters
function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpper());

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLower());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
console.log(getRandomNumber());


function getRandomSymbol() {
  var symbols = "/^[a-zA-Z0-9!@#$%^&*]{6,16}$/";
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol(0))



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


