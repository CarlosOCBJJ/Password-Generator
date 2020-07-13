// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Define variables for password content
var numbersString = "1234567890";
var lowercaseString = "abcdefghijklmnopqrstuvwxyz";
var uppercaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharString = "!@#$%^&*()";

// Function for password
function generatePassword() {

  var passwordLength = prompt("How long do you want your password?");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Enter password length between 8 and 128.");
    return;
  }

  // Variable to store special characters
  var specialChar = confirm(
    'Click OK to confirm including special characters.'
  );
  // Variable to store numeric characters
  var numbers = confirm(
    'Click OK to confirm including numeric characters.'
  );
  // Variable to store lowercase characters
  var lowercase = confirm(
    'Click OK to confirm including lowercase characters.'
  );
  // Variable to store uppercase characters
  var uppercase = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  let values = [];
  // If statements to add to values
  if (numbers === true) {
    values.push(numbersString);
  }
  if (lowercase === true) {
    values.push(lowercaseString);
  }
  if (uppercase === true) {
    values.push(uppercaseString);
  }
  if (specialChar === true) {
    values.push(specialCharString);
  }

  //Possible password values
  let finishedValues = values.join("");
  console.log(finishedValues);
  let password = "";

  //create for loop to choose password characters
  // for(var i = 0; i < values.length; i++){
  //   password = password + values.charAt(Math.floor(Math.random()*Math.floor(values.length -1)));
  // }

  function createPassword(length) {
    result = '';
    resultArray = [];
    for (var i = 0; i < length; i++) {
      var randomPosition = (Math.floor(Math.random() * finishedValues.length));
      var result = finishedValues.charAt(randomPosition);
      console.log(result);
      resultArray.push(result);
      console.log(resultArray);
    }
  }
  createPassword(passwordLength);
  // end of function
}

// call function
generatePassword();

//add password to textbox/display area
// document.getElementById("display").value = password;

//create an alert
// document.createElement

var completedPassword = resultArray.join("");
alert('Your password is: ' + completedPassword);

