// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase= "abcdefghijklmnopqrstuvwxyz";
var upperCase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numeric = '0123456789';
var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";



function generatePassword(){
  var password = prompt('Please Enter # thats password length is atleast 8 characters and no more than 128 characters');
  password = parseInt(password)
  console.log( password)
  
  if (password < 8 || password > 128 || isNaN(password)){
    alert("please enter a number between 8 and 128");
     generatePassword()  
  }else{ 
    
  }

  var lowerCharacters = confirm('Should it include lowercase');
    if (lowerCharacters == true){
      lowerCharacters = lowerCase.split("")
    } else{
      lowerCharacters = ""
      
    }
    console.log(lowerCharacters)

  var upperCharacters = confirm('Should it include uppercase');
    if (upperCharacters == true){
      upperCharacters = upperCase.split("");
    } else{
      upperCharacters = ""
    }
    console.log(upperCharacters)

  var numbers = confirm('Should it include numbers');
    if (numbers == true){
      numbers = numeric.split("");
    } else{
      numbers = ""
      
    }
    console.log(numbers)

  var special = confirm('Should it include special characters');
    if (special == true){
      special = specialChar.split("");
    } else{
      special = ""
    }
    console.log(special)

    var passwordArray = [special, numbers, upperCharacters, lowerCharacters];
    
    console.log(passwordArray);
    var newPassword = "";

    for (var i = 0; i <= password; i++)
      console.log(passwordArray[Math.floor(Math.random() * i)]);
      newPassword += passwordArray[Math.floor(Math.random() * i)];
      console.log(newPassword);
      return newPassword;
      
}

      // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);