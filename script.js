document.getElementById("claim").addEventListener("click", validateForm);
document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()
});

const fname = document.getElementById("fname");
const fnameText = document.getElementById("fnameText");
const lnameText = document.getElementById("lnameText");
const lname = document.getElementById("lname");
const emailInput = document.getElementById("emailInput");
const email = document.getElementById("email");
const passInput = document.getElementById("passInput");
const pass = document.getElementById("input");

function validateForm(){
    firstName();
    lastName();
    emailValidation();
    password();
}

function firstName(){
    let x = document.forms["form"]["fname"].value
    if (x == "") {
        fnameText.innerHTML = "First Name cannot be empty";
        fname.style.backgroundImage = "url(images/icon-error.svg)";
        fname.style.border = "solid hsl(0, 100%, 74%)";
        fname.placeholder = "";
        return false;
    }
    else{
        fnameText.innerHTML = "";
        fname.style.backgroundImage = "none";
        fname.style.border = "1px solid grey";
    }
}

function lastName(){
    let x = document.forms["form"]["lname"].value
    if (x == "") {
        lnameText.innerHTML = "Last Name cannot be empty";
        lname.style.backgroundImage = "url(images/icon-error.svg)";
        lname.style.border = "solid hsl(0, 100%, 74%)";
        lname.placeholder = "";
        return false;
    }
    else{
        lnameText.innerHTML = "";
        lname.style.backgroundImage = "none";
        lname.style.border = "1px solid grey";
    }
}

function emailValidation(){
    let x = document.forms["form"]["email"].value
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x == "") {
        emailInput.innerHTML = "Please enter your email";
        email.style.backgroundImage = "url(images/icon-error.svg)";
        email.style.border = "solid hsl(0, 100%, 74%)";
        email.placeholder = "";
        return false;
    }
    else if(x.match(emailFormat)){
        emailInput.innerHTML = "";
        email.style.backgroundImage = "none";
        email.style.border = "1px solid grey";
    }
    else{
        emailInput.innerHTML = "Looks like this is not an email";
        email.style.backgroundImage = "url(images/icon-error.svg)"
        email.style.border = "solid hsl(0, 100%, 74%)";
        email.placeholder = "email@example/com";
        email.classList.add("placeholder");
    }
}

function password(){
    let x = document.forms["form"]["password"].value
    if (x == "") {
        passInput.innerHTML = "Password cannot be empty";
        pass.style.backgroundImage = "url(images/icon-error.svg)";
        pass.style.border = "solid hsl(0, 100%, 74%)";
        pass.placeholder = "";
        return false;
    }
    else if(x.length<8){
        passInput.innerHTML = "Password should be at least 8 characters";
        pass.style.backgroundImage = "url(images/icon-error.svg)";
        pass.style.border = "solid hsl(0, 100%, 74%)";
        pass.placeholder = "";
    }
    else{
        passInput.innerHTML = "";
        pass.style.backgroundImage = "none";
        pass.style.border = "1px solid grey";
        document.getElementById("form").submit();
    }
}