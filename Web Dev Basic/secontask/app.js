document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formData");
  
    const fields = {
      name: document.querySelector("#name"),
      username: document.querySelector("#user"),
      password: document.querySelector("#pass"),
      email: document.querySelector("#email"),
      num: document.querySelector("#num"),
      dob: document.querySelector("#dob"),
    };
  
    const outputs = {
      name: document.querySelector(".nameOut"),
      username: document.querySelector(".userOut"),
      password: document.querySelector(".passOut"),
      email: document.querySelector(".emailOut"),
      num: document.querySelector(".numOut"),
      dob: document.querySelector(".dobOut"),
      gender: document.querySelector(".genOut"),
    };
  
    const patterns = {
      username: /^[a-z0-9]{3,15}$/,
      password: /^[A-Za-z\d@$!%*?&]{6,15}$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      num: /^\d{10}$/,
    };
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let isValid = true;
  
      // for validation
      function validateField(field, output, pattern, errorMsg) {
        const value = field?.value?.trim();
        if (!value || (pattern && !pattern.test(value))) {
          output.textContent = errorMsg;
          isValid = false;
        } else {
          output.textContent = "";
        }
      }
  
      // Validate fields
      validateField(fields.name, outputs.name, null, "Name is required");
      validateField(fields.username, outputs.username, patterns.username,"Lowercase letters,digits only(3-15 character)");
      validateField(fields.password, outputs.password, patterns.password, "Password must be 6-15 characters");
      validateField(fields.email, outputs.email, patterns.email, "Invalid email format");
      validateField(fields.num, outputs.num, patterns.num, "Invalid phone number (10 digits required)");
      validateField(fields.dob, outputs.dob, null, "Enter date of birth");
  
      //gender validation
      const gender = document.querySelector('input[name="gender"]:checked');
      if (!gender) {
        outputs.gender.textContent = "Choose a gender";
        isValid = false;
      } else {
        outputs.gender.textContent = "";
      }
  
      if (!isValid) return;
  
      alert("Form submitted successfully");
      form.reset();
    });
     //individually removes error when gender is selected
    document.querySelectorAll('input[name="gender"]').forEach(input => {
      input.addEventListener("change", () => {
        outputs.gender.textContent = "";
      });
    });
  });
  