// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
function passwordPrompt(){
  generateBtn.addEventListener("click", writePassword);
  var length = confirm('Password length is atleast 8 characters and no more than 128 characters');
  
}

