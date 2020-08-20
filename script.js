
// prompt - length of password
var chooseLength = prompt("What length would you like your password?  Choose a number between 8 and 128")
console.log(chooseLength)

  if (chooseLength <8) {
    alert("Password must be at least 8 characters.");
  } 
  else if (chooseLength >128) {
    alert("Password must be at least 8 characters.");
  }

  // define variables
var upperCase = confirm("Would you like to use uppercase letters?")
var lowerCase = confirm("Would you like to use lowercase letters?")
var useNumber = confirm("Would you like to use numbers")
var useSpecial = confirm("Would you like to use special characters?")


// input validated

// if (upperCase = true|| lowerCase = true || useNumber = true || useSpecial - true) {
//  alert("You selected a password with: " + )
// }

// if no variables selected
if (!upperCase && !lowerCase && !useNumber && !useSpecial) {
  alert("You much choose a character type to continue!")
}



// generate random characters
// uppercase
function getRandomUpper() {
return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
var useUpper = getRandomUpper()
console.log(useUpper)

// lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
var useLower = getRandomLower()
console.log(useLower)

// random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  }
  var useNumber = getRandomNumber()
  console.log(useNumber)

// random symbol
function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-='";
  return symbols[Math.floor(Math.random() * symbols.length)]
}
var useSymbol = getRandomSymbol()
console.log(useSymbol)


// create password
function writePassword () {

  var password = [useUpper, useLower, useNumber, useSymbol] 
  return password[Math.floor(Math.random() * password.length)] 
  
}
var passwordChar = writePassword()

console.log(passwordChar)

var password = passwordChar.repeat(chooseLength)
console.log(password)



// // Assignment Code
// var generateBtn = document.querySelector("#generate");



// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


