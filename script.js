// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var lengthInput = prompt("choice number between 8-128");

  var numberInput = confirm("do you want to include numbers?");

  var specialCharacterInput = confirm("do you want to include special character");

  var uppercaseInput = confirm("do you want upper case");

  var lowercaseInput = confirm("do you want lower case");
console.log("user input values ", lengthInput,numberInput, specialCharacterInput,uppercaseInput,lowercaseInput);
  var numbers = "0123456789";

  var lowercase = "abcedfghijk"
  var uppercase = "ABCEDFGHKI"
  var specialSymbols = "!@#$%^&())"

  if (lengthInput < 8 || lengthInput > 128) {
    // userpassword length not between 8-128 return "password length between 8-128"
    // return a string with error message
    return "please enter an value between 8-128"
  }
  // write a forloop that goes to all the way up the the length input and each time 
  //it runs to generate a ramdon number then access a number and multiple by the lowercase.length
  //used Math.floor to cut out decimal and round numbers
  //used rounded number within Array
  var characterOption = "";
if (numberInput) {
  characterOption +=  numbers;
}
if (lowercaseInput){
  characterOption += lowercase;
}
if(uppercaseInput){
  characterOption += uppercase;
}
if(specialCharacterInput){
  characterOption += specialSymbols;
}
console.log(characterOption);
  var password = ''
  for (var i = 1; i < lengthInput; i++) {
    // generate random number between 0 length of character option
    // use random number to select a character from character option
    // save random character as var 
    // add random character to password string
    var randomNumber = Math.floor(Math.random() * characterOption.length);
    var randomCharacter = characterOption[ randomNumber];
    password += randomCharacter;
  }
return password;



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
send prompt to user
save user input from prompt as var
use those var to generate password
return generated password
 */