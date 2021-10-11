var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var chkNumberButton = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");

chkNumberButton.addEventListener("click", checkBirthDateIsLucky)

function compareValues(sum, luckyNumber) {
    if (sum % Number(luckyNumber.value) === 0) {
        outputBox.innerText = "Your Birthday is lucky :) ";
    } else {
        outputBox.innerText = "Your Birthday is not lucky :( ";
    }
}

function checkBirthDateIsLucky() {
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    if(luckyNumber.value > 0 && dob != ""{
      if (sum && dob) {
        compareValues(sum, luckyNumber.value);
      } else {
        outputBox.innerText = "Please Enter Both The Fields";
     } else {
         
        outputBox.innerText = "Please Enter valid inputs";
}

function calculateSum(dob) {
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
