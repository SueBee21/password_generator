
// prompt - length of password
var chooseLength = prompt("What length would you like your password?  Choose a number between 8 and 128")
console.log(chooseLength)

if (chooseLength >= 8 && chooseLength <= 128) {

  var upperCase = confirm("Click OK if you would you like to use uppercase letters?")
  var lowerCase = confirm("Click OK if you would you like to use lowercase letters?")
  var useNumberCase = confirm("Click OK if you would you like to use numbers")
  var useSpecialCase = confirm("Click OK if you would you like to use special characters?")

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
  if (useNumberCase) {
    useNumberCase = getRandomNumber()
    console.log(useNumber)
  }


  var useSymbol = ""
  if (useSpecialCase) {
    useSpecialCase = getRandomSymbol()
    console.log(useSymbol)
  }




  if (upperCase || lowerCase || useNumberCase || useSpecialCase) {

    var passwordChar = writepassword(useUpper, useLower, useNumber, useSymbol)

      var passwordText = document.querySelector("#password");

  passwordText.value = passwordChar;

  }

  else {
    alert("You much choose a character type to continue!")
  }

}
else {
  // stop script here and refresh?
  alert("password must be at least 8 characters and less than 129 characters.");
  // define variables

}



// input validated

// if (upperCase = true|| lowerCase = true || useNumber = true || useSpecial - true) {
//  alert("You selected a password with: " + )
// }

// if no variables selected



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
  var symbols = "!@#$%^&*()_+~`|}{[]\:;?><,./-='";
  return symbols[Math.floor(Math.random() * symbols.length)]
}



// create password
function writepassword(useUpper, useLower, useNumber, useSymbol) {



  var password = useUpper + useLower + useNumber + useSymbol

  var remainingpasswordLength = chooseLength - password.length
  for (let index = 0; index < remainingpasswordLength; index++) {


    if (upperCase) {
      password = password + getRandomUpper()

    }



    if (lowerCase) {
      password = password + getRandomLower()

    }


    if (useNumberCase) {
      password = password + getRandomNumber()

    }



    if (useSpecialCase) {
      password = password + getRandomSymbol()

    }

  }
   return password

}



// // Assignment Code
// var generateBtn = document.querySelector("#generate");



// // Write password to the #password input
// function writepassword() {
//   var password = generatepassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writepassword);


