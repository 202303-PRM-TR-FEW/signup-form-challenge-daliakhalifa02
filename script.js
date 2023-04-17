document.getElementById("claim").addEventListener("click", validateForm);
document.getElementById("form").addEventListener("click", function(event){
    event.preventDefault()
});
function validateForm(){
    firstName();
    lastName();
    email();
    password();
}

function firstName(){
    let x = document.forms["form"]["fname"].value
    if (x == "") {
        document.getElementById("fnameText").innerHTML = "First Name cannot be empty";
        return false;
    }
    else{
        document.getElementById("fnameText").innerHTML = "";
    }
}

function lastName(){
    let x = document.forms["form"]["lname"].value
    if (x == "") {
        document.getElementById("lnameText").innerHTML = "Last Name cannot be empty";
        return false;
    }
    else{
        document.getElementById("lnameText").innerHTML = "";
    }
}

function email(){
    let x = document.forms["form"]["email"].value
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (x == "") {
        document.getElementById("emailInput").innerHTML = "Please enter your email";
        return false;
    }
    else if(x.match(emailFormat)){
        document.getElementById("emailInput").innerHTML = "";
    }
    else{
        document.getElementById("emailInput").innerHTML = "Looks like this is not an email";
    }
    
}

function password(){
    let x = document.forms["form"]["password"].value
    if (x == "") {
        document.getElementById("passInput").innerHTML = "Password cannot be empty";
        return false;
    }
    else if(x.length<8){
        document.getElementById("passInput").innerHTML = "Password should be at least 8 characters";
    }
    else{
        document.getElementById("passInput").innerHTML = "";
        document.getElementById("form").submit();
    }
}