
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  // set length of password
  var chooseLength = prompt("What length would you like your password?  Choose a number between 8 and 128");

  // validate length
  if (chooseLength >= 8 && chooseLength <= 128) {

    var useUpper = confirm("Click OK if you would you like to use uppercase letters?");
    var useLower = confirm("Click OK if you would you like to use lowercase letters?");
    var useNumber = confirm("Click OK if you would you like to use numbers");
    var useSpecial = confirm("Click OK if you would you like to use special characters?");

    // write password
    if (useUpper || useLower || useNumber || useSpecial) {

      var passwordChar = writepassword(useUpper, useLower, useNumber, useSpecial);
      var passwordText = document.querySelector("#password");
      passwordText.value = passwordChar;
    }

    // if no characters selected
    else {
      alert("You much choose at least one character type to continue!");
    }

  }
  // if length does not meet criteria
  else {
    alert("You much choose a password length at least 8 characters and no more than 128 characters.");
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
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

  // create random password
  function writepassword(useUpper, useLower, useNumber, useSpecial) {

    var password = "";

    for (let index = 0; password.length < chooseLength; index++) {

      if (useUpper) {
        password = password + getRandomUpper();
        if (password.length == chooseLength) {
          break;
        }
      }

      if (useLower) {
        password = password + getRandomLower();
        if (password.length == chooseLength) {
          break;
        }
      }

      if (useNumber) {
        password = password + getRandomNumber();
        if (password.length == chooseLength) {
          break;
        }
      }

      if (useSpecial) {
        password = password + getRandomSymbol();
        if (password.length == chooseLength) {
          break;
        }
      }

    }
    return password
  }
}





