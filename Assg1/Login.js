function validation() {
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;

	if (email == "" || (email.indexOf("@") < 0)) {
		alert("Enter valid email");
		email.focus();
		return false;
	}

	else if (password == "") {
		alert("Enter valid password");
		password.focus();
		return false;
	}
}