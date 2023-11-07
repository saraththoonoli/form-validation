function FormValidation() {
    // declerations
    let fname =
        document.forms.RegForm.fname.value;
    let lastname =
        document.forms.RegForm.lastname.value;
    let Pswd1 =
        document.forms.RegForm.Pswd1.value;
    let pswd2 =
        document.forms.RegForm.pswd2.value;
    let email =
        document.forms.RegForm.email.value;

    //JS reGex for Email Validation.
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    let phone =
        document.forms.RegForm.phone.value;

    //JS reGex for phone Validation.
    let regPhone = /^\d{10}$/;

    //gender Validation.
    let gender =
        document.forms.RegForm.gender.value;

    //qualification Validation.
    let qualification =
        document.forms.RegForm.qualification.value




    //name Validation.
    if (fname == "" || fname == null) {
        alert("Please enter your name properly");
    }
    //lastname Validation.
    else if (lastname == "") {
        alert("Please enter your last name");
    }
    //password Validation and alert .   
    else if (Pswd1 == "") {
        alert("Please enter your password");
    }
    else if (Pswd1.length < 6) {
        alert("Password should be atleast 6 character");
    }

    else if (Pswd1 !== pswd2) {
        alert("Your password is incorrect");
    }
    //email Validation and alert.
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
    }
    //phone number Validation and alert.
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");

    }
    //gender alert box.
    if (gender === "") {
        alert('Enter your genter')
    }
    //qualification alert box.
    if (qualification == "") {
        alert('Enter your qualification')

    }
    //submit alert box .
    else {
        alert('submited succesfully')
    }
}