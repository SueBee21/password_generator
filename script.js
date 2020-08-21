
// // Add event listener to generate button
var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writepassword);{
}

// prompt - length of password
var chooseLength = prompt("What length would you like your password?  Choose a number between 8 and 128")
console.log(chooseLength)

// validate length
if (chooseLength >= 8 && chooseLength <= 128) {

  var upperCase = confirm("Click OK if you would you like to use uppercase letters?")
  var lowerCase = confirm("Click OK if you would you like to use lowercase letters?")
  var numberCase = confirm("Click OK if you would you like to use numbers")
  var specialCase = confirm("Click OK if you would you like to use special characters?")

  // capture selected criteria
  var useUpper = ""
  if (upperCase) {
    useUpper = getRandomUpper()
    console.log(useUpper)
  }

  var useLower = ""
  if (lowerCase) {
    useLower = getRandomLower()
    console.log(useLower)
  }

  var useNumber = ""
  if (numberCase) {
    useNumber = getRandomNumber()
    console.log(useNumber)
  }

  var useSymbol = ""
  if (specialCase) {
    useSymbol = getRandomSymbol()
    console.log(useSymbol)
  }

// write password
  if (upperCase || lowerCase || numberCase || specialCase) {

    var passwordChar = writepassword(useUpper, useLower, useNumber, useSymbol)

      var passwordText = document.querySelector("#password");

  passwordText.value = passwordChar;

  }

  // if no characters selected
  else {
    alert("You much choose a character type to continue!")
  }

  // if length does not meet criteria
}
else {
  alert("password must be at least 8 characters and less than 129 characters.");
}



// generate random characters
// uppercase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

// random symbol
function getRandomSymbol() {
  var symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-='";
  return symbols[Math.floor(Math.random() * symbols.length)]
}


// create random assword

function writepassword(useUpper, useLower, useNumber, useSymbol) {

  var password = useUpper + useLower + useNumber + useSymbol

  // var remainingpasswordLength = chooseLength - password.length
  for (let index = 0; password.length < chooseLength; index++) {

    console.log(password)

    if (upperCase) {
      password = password + getRandomUpper()
    }

    if (lowerCase) {
      password = password + getRandomLower()
    }

    if (numberCase) {
      password = password + getRandomNumber()
    }

    if (specialCase) {
      password = password + getRandomSymbol()
    }

  }
   return password

}


// // Assignment Code
// ;



// // Write password to the #password input
// function writepassword() {
//   var password = generatepassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }




