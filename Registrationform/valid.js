function fun() {
    var form = document.forms[0];
    var userv = form.user.value;
    var pwdv = form.pwd.value;
    var emailv = form.email.value;
    var phv = form.ph.value;
    var sexv = form.sex.value;
    var dob_dayv = form.dob_day.value;
    var dob_monthv = form.dob_month.value;
    var dob_yearv = form.dob_year.value;
    var addressv = form.address.value;

    var userreg = new RegExp("^[a-zA-Z][a-zA-Z0-9]*$");
    var emailreg = new RegExp("^[a-zA-Z][a-zA-Z0-9_.]*@[a-zA-Z][a-zA-Z0-9_.]*\\.[a-zA-Z]{2,}$");
    var phreg = new RegExp("^[0-9]{10}$");

    var ruser = userreg.exec(userv);
    var remail = emailreg.exec(emailv);
    var rph = phreg.exec(phv);

    var languages = form.language;
    var isLanguageChecked = false;
    for (var i = 0; i < languages.length; i++) {
        if (languages[i].checked) {
            isLanguageChecked = true;
            break;
        }
    }

    if (ruser && remail && rph && (pwdv.length > 6) && sexv && dob_dayv && dob_monthv && dob_yearv && addressv && isLanguageChecked) {
        alert("All values are valid");
        return true;
    } else {
        if (!ruser) {
            alert("username invalid");
            form.user.focus();
        }
        if (!remail) {
            alert("email invalid");
            form.email.focus();
        }
        if (!rph) {
            alert("phone number invalid");
            form.ph.focus();
        }
        if (pwdv.length < 6) {
            alert("password invalid");
            form.pwd.focus();
        }
        if (!sexv) {
            alert("sex not selected");
        }
        if (!dob_dayv || !dob_monthv || !dob_yearv) {
            alert("date of birth not selected");
        }
        if (!isLanguageChecked) {
            alert("at least one language must be selected");
        }
        if (!addressv) {
            alert("address cannot be empty");
            form.address.focus();
        }
        return false;
    }
}
