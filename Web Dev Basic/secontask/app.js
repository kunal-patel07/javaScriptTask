document
  .querySelector("#formData")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let username = document.querySelector("#user").value;
    let password = document.querySelector("#pass").value;
    let email = document.querySelector("#email").value;
    let num = document.querySelector("#num").value;
    let dob =document.querySelector("#dob").value;
      let gender = document.querySelector('input[name="gender"]:checked');


    let nameOut = document.querySelector(".nameOut");
    let userOut = document.querySelector(".userOut");
    let passOut = document.querySelector(".passOut");
    let emailOut = document.querySelector(".emailOut");
    let numOut = document.querySelector(".numOut");
    let dobOut = document.querySelector(".dobOut");
    let genOut  = document.querySelector(".genOut");
    isValid = true;

    //validation for name
    if (name == "") {
      nameOut.textContent = "name is require";
      nameOut.style.color = "red";
      isValid = false;
    } else {
      nameOut.textContent = "";
    }
    //validation for username
    let validateUser = /^[a-z0-9]{3,15}$/;
    if (!username.match(validateUser)) {
      userOut.textContent = "lowercase and digit required";
      userOut.style.color = "red";
      isValid = false;
    } else {
      userOut.textContent = "";
    }
    //validation for password
    let validatePass= /^[A-Za-z\d@$!%*?&]{6,15}$/;
    if(!(password.match(validatePass))){
      passOut.textContent = "Password must be 6-15 characters (letters,special characters allowed)";
      passOut.style.color= "red";
      isValid= false;
    }else{
      passOut.textContent= "";
    }
    //validation for email
    let validateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$/
    if (!(email.match(validateEmail))) {
      emailOut.textContent="invalid email format";
      emailOut.style.color = "red";
      isValid=false;
    }else{
      emailOut.textContent="";
    }
    //validation for number
    let validateNum=/^\d{10}$/;
    if (!(num.match(validateNum))){
      numOut.textContent="invalid number";
      numOut.style.color="red"
      isValid=false;
    }else{
      numOut.textContent="";
    } 
   //validation for DOB
 
if(dob == ""){
   dobOut.textContent="enter date of birth"
   dobOut.style.color="red"
   isValid=false
}else{
   dobOut.textContent=""
}
   //validation for gender
   if(!gender){
      genOut.textContent = "choose one of them"
      genOut.style.color= "red";
      isValid= false
   }else{
      genOut.textContent=""
   }
   if(isValid){
    alert("form submitted successfully")
  } 
  });
