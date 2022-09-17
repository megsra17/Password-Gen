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
  var password = prompt('Please Enter # thats password length is atleast 8 characters and no more than 128 characters');
  password = parseInt(password)
  console.log( password)
  
  if (password < 8 || password > 128){
    alert("please enter a number between 8 and 128");
     generatePassword()  
  }else{ 
    
    /* password.length =  */
  }
  var lowerCharacters = confirm('Should it include lowercase');
    if (true){
      lowerCharacters = lowerCase.split("")
    } else{
      
    }

  var upperCharacters = confirm('Should it include uppercase');
    if (true){
      upperCharacters = upperCase.split("");
    } else{
      
    }

  var numbers = confirm('Should it include numbers');
    if (true){
      numbers = numeric.split("");
    } else{
      
    }

  var special = confirm('Should it include special characters');
    if (true){
      special = specialChar.split("");
    } else{
      
    }

    var passwordArray = [special, numbers, upperCharacters, lowerCharacters]
}

