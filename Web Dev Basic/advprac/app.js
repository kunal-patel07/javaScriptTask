  document.querySelector("#formData")
  .addEventListener("submit", function (event) {
      event.preventDefault();

      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let password = document.querySelector("#pass").value;
      let number = document.querySelector("#num").value;
      let dob = document.querySelector("#dob").value;
      let username = document.querySelector("#user").value;
      let gender = document.querySelector('input[name="gender"]:checked');  

      let nameOut = document.querySelector(".nameOut");
      let emailOut = document.querySelector(".emailOut");
      let passOut = document.querySelector(".passOut");
      let numOut = document.querySelector(".numOut");
      let dobOut = document.querySelector(".dobOut");
      let userOut = document.querySelector(".userOut");
      let genderOut=  document.querySelector(".genderOut");
      let isValid = true;

      // validation for name

      if (name === "") {
        nameOut.textContent = "name is required";
        nameOut.style.color = "red";
        isValid = false;
      } else {
        nameOut.textContent = "";
      }

      // validation for Username

      let uservalidation = /^[a-z0-9]{4,16}$/;
      if (!uservalidation.test(username)) {
        userOut.textContent = "enter valid username";
        userOut.style.color = "red";
        isValid = false;
      } else {
        userOut.textContent = "";
      }

      // validation for Email
      let emailvalidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailvalidation)) {
        emailOut.textContent = "please enter valid email";
        emailOut.style.color = "red";
        isValid = false;
      } else {
        emailOut.textContent = "";
      }
      //validation for number
      let numvalidation = /^\d{10}$/;
      if (!number.match(numvalidation)) {
        numOut.textContent = "please enter valid 10 digits number ";
        numOut.style.color = "red";
        isValid = false;
      } else {
        numOut.textContent = "";
      }
      // validation for password
      let passwordValidation = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
      if (!(password == passwordValidation)) {
        passOut.style.color = "red  ";
        passOut.textContent =
          "Password must be at least 6 characters long and include one letter & one number.";
        isValid = false;
      } else {
        passOut.textContent = "";
      }
    });
  //validation for gender

  if(!(gender)){
    genderOut.style.color ="red";
    genderOut.textContent="please choose one gender";
    isValid=false;
  }else 
  {
    genderOut.textContent=""; 
  }
