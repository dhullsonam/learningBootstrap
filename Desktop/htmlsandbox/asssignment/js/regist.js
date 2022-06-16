function validationForm() {
    var fname = fnameValidation();

    var lname = lnameValidation();
    var mail = emailValidation();

    var password = passwordValidation();


}
function fnameValidation() {
    let tag = document.getElementById("firstName");
    let x = tag.value
    var match = /^[A-Za-z]+$/;


    if (x == '') {
        tag.classList.add("is-invalid")
        tag.classList.remove("is-valid")
        document.getElementById("fn").innerHTML = "First name can't be empty";
    }
    else if (!match.test(x)) {
        tag.classList.add("is-invalid")
        document.getElementById("fn").innerHTML = "Name can be alphabet only";
        tag.classList.remove("is-valid");
    }
    else {
        tag.classList.add("is-valid")
        tag.classList.remove("is-invalid")
    }

}
function lnameValidation() {
    let tag = document.getElementById("lastname")
    let x = tag.value;
    var match = /^[A-Za-z]+$/;
    if (x == '') {
        tag.classList.add("is-invalid")
        tag.classList.remove("is-valid")
          document.getElementById("ln").innerHTML = "last name can't be empty";
    }
    else if (!match.test(x)) {
        tag.classList.add("is-invalid")
        document.getElementById("ln").innerHTML = "Name can be alphabet only";
        tag.classList.remove("is-valid");
    }
    else {
        tag.classList.add("is-valid")
        tag.classList.remove("is-invalid")
    }
}
// function emailValidation() {
//     var tag = document.getElementById("email")
//     var match = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (tag.value = ""){
//         tag.classList.add("is-invalid")
//         tag.classList.remove("is-valid")
//          document.getElementById("eid").innerHTML = "please enter a valid email";
//     }
//         else if(!match.test(tag.value))
//         {
//         tag.classList.add("is-invalid")
//         document.getElementById("eid").innerHTML = "invalid email address";
//         tag.classList.remove("is-valid");
//         }
//     else {
//          tag.classList.add("is-valid")
//         tag.classList.remove("is-invalid")  
//     }


function passwordValidation() {
    var password = document.getElementById("pwd").value;
    if (password == "") {
        window.alert("please fill the password")
        return false;
    }
    else if (password.length < 8) {
        window.alert("please enter atleast 8 digit")
        return false
    }
    else
        return true
}