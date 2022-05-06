let errMsg;

const validateSignUp = (name,email,contactnumber, password) => {
  // targeting all form fields
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");
  const contactnumberInput = document.querySelector("#contactnumber");
  const nameInput=document.querySelector("#name");
  if(!name){
    alert.error("Please Enter Your Name");
    nameInput.focus();
    errMsg = false;
  }
  else if(!contactnumber)
  {
    alert.error("Please Enter Your Contact");
    contactnumberInput.focus();
    errMsg = false;
  }
  else if(contactnumber.value<10 && contactnumber.value>10)
  {
    alert.error("Number should Be 10 Characters Long");
   contactnumberInput.focus();
    errMsg = false;
  }
 else if (!email) {
    alert.error("Please input your email address");
    emailInput.focus();
    errMsg = false;
  } else if (password === "") {
    alert.error("Please provide your password!");
    passwordInput.focus();
    errMsg = false;
  } else if (password.value <= 7) {
    alert.error("Your password must have 8 characters or greater");
    passwordInput.focus();
    errMsg = false;
  } else if (
    typeof password !== "undefined"
  ) 
  {
} else {
  alert.success("You've signed up successfully. Proceed to login");
  errMsg = true;
}
return errMsg;
};

export default signUpCheck;