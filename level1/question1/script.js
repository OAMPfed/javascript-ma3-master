//Use RegEx to validate form

//Verify first name
function verifyFname(fname) {
    var fNameRegExp = /[a-z] [A-Z]/gi; 
    return fNameRegExp.test(fname);
    }

//Verify last name
function verifyLname(lname) {
    let lNameRegExp = /[a-z][A-Z]/gi; 
    return lNameRegExp.test(lname);
    }


//Verify phone number
function verifyPhone(phone) {
    let phoneRegExp = /^[0-9]{8}$/; 
    return phoneRegExp.test(phone);
    }


//Verify email
function verifyEmail(email){
    let emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/; 
    return emailRegExp.test(email);
    }


//Create new user
document.getElementById("submit-btn").addEventListener("click", createNewUser);
function createNewUser(){
    let fName = document.getElementById("fname-input").value;
    let lName = document.getElementById("lname-input").value;
    let phone = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;
    
    let fNameValid = verifyFname(fName);
    let lNameValid = verifyLname(lName);
    let phoneValid = verifyPhone(phone);
    let emailValid = verifyEmail(email);
    
    if (fNameValid && lNameValid && phoneValid && emailValid){
        alert("New user created");
    } else {
        alert("Not valid information");
    }
}