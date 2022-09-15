// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = '0123456789';
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
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
  var characters = confirm('Should it include lowercase');
  if (true){

  }
  
}

