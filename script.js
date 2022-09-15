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
  var password = prompt('Password length is atleast 8 characters and no more than 128 characters');
  if (password.length < 8){
    alert("please enter new password");
     password = prompt('Password length is atleast 8 characters and no more than 128 characters');
  }else{
    password = parseInt(password)
    console.log(typeof password)
  }
  var characters = prompt('Include lowercase, uppercase, numeric, and/or special characters');
  if (characters){
    
  }
  
}

