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
function generatePassword(){
  var length = prompt('Password length is atleast 8 characters and no more than 128 characters');
  
  length = parseInt(length)
  console.log(typeof length)
}

