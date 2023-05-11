let userDetails = []

function addInputData(){
  const inputEmail =document.querySelector('#signup-input');
  const Email = inputEmail.value;
  const inputPassword = document.querySelector('#password-input');
  const Password = inputPassword.value
  userDetails.push({
    email:Email,
    password:Password
  })
  
  localStorage.setItem("userData" ,JSON.stringify(userDetails));

 const getData =  localStorage.getItem("userData")
 console.log("getData = " + getData);

  inputEmail.value = "";
  inputPassword.value = "";
  console.log("userData" +JSON.stringify(userDetails))
}


const onClick = document.querySelector('#button-signup');
onClick.addEventListener("click",getInputEmail);
onClick.addEventListener("click",getInputPassword);
onClick.addEventListener("click",addInputData)


function getInputEmail(){
 const inputEmail =  document.querySelector('#signup-input');
 const Email = inputEmail.value;
 if(Email === null || Email === ""){
 const validationEmail =  document.querySelector('.validation-text-email');
 validationEmail.innerHTML = "Please enter an email";
 }else if(Email !== null || Email !== ""){
  const validationEmail =  document.querySelector('.validation-text-email');
  validationEmail.innerHTML = ""
 }
}

function getInputPassword(){
  const inputPassword = document.querySelector('#password-input');
 const Password = inputPassword.value;
 if( Password === null || Password === ""){
  const validationPassword = document.querySelector('.validation-text-password');
  validationPassword.innerHTML = "This field is required"
 }else{
  validationLength();
 }
//   validationLowerCase();
}

const show = document.querySelector('#show-button');
show.addEventListener("click",showHideButton)



function showHideButton(){
const Text = document.querySelector('#show-button');
const buttonText = Text.innerText
console.log(buttonText)
console.log("butn clicked" + typeof buttonText)
if(buttonText == "Show"){
  document.querySelector('#show-button')
  .innerHTML =`<i class="bi bi-eye-slash"></i></i>Hide`
  document.getElementById('password-input').type = "text";
}else if(buttonText === "Hide"){
  document.querySelector('#show-button')
  .innerHTML = `<i class="bi bi-eye"></i>Show`
  document.getElementById('password-input').type = "password";
}
}







function validationLength(){
  const inputPassword = document.querySelector('#password-input');
 const Password = inputPassword.value;
  if(Password.length < 8){
    document.querySelector('.validation-text-password')
    .innerHTML = "Password rules are not satisfied"
  }
}


var passwordInput = document.getElementById("password-input");
var letter = document.getElementById("list-text-lowercase");
var capitalLetter = document.getElementById("list-text-uppercase");
var Number = document.getElementById("list-text-number");


passwordInput.onkeyup = () => {
  
  var lowerCaseLetters = /[a-z]/g;
   if(passwordInput.value.match(lowerCaseLetters)){
    letter.classList.add('lowercaseLetter');
   }else{
    letter.classList.remove('lowercaseLetter');
    letter.classList.add('lowercasetext')
   }

   var upperCaseLetters = /[A-Z]/g;
   if(passwordInput.value.match(upperCaseLetters)){
    capitalLetter.classList.add('uppercaseLetter')
   }else{
    capitalLetter.classList.remove('uppercaseLetter')
    capitalLetter.classList.add('uppercasetext')
   }

    var numbers = /[0-9]/g;
    if(passwordInput.value.match(numbers)){
      Number.classList.add('number')
    }else{
      Number.classList.remove('number')
      Number.classList.add('numbertext')
    }
}

