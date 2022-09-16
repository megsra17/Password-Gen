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
  password = parseInt(password)
  console.log( password)
  
  if (password < 8 || password > 128){
    alert("please enter a number between 8 and 128");
     
    
  }else{
    var characters = confirm('Should it include lowercase');
    if (true){

    }
  }
  
  
}

