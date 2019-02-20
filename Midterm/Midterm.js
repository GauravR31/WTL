function validate() {
	// body...
	var name = document.getElementsByName('name')[0].value;
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;
	var passwordConfirm = document.getElementsByName('passwordConfirm')[0].value;
	var nationality = document.getElementsByName('nationality')[0].value;
	var gender = document.getElementsByName('gender')[0].value;

	if (!name.match(/[a-zA-z]/)) {
		alert("Enter valid name");
		name.focus();
		return false;
	}

	else if(email == "" || email.indexOf('@') < 0) {
		alert("Enter valid email address");
		email.focus();
		return false;
	}

	else if(password == "") {
		alert("Enter valid password");
		password.focus();
		return false;
	}

	else if (password.length < 4) {
		alert("Minimum length of password is 4");
		password.focus();
		return false;
	}

	else if (passwordConfirm == "") {
		alert("Enter valid confirmation password");
		passwordConfirm.focus();
		return false;
	}

	else if (passwordConfirm.length < 4) {
		alert("Minimum length of password is 4");
		password.focus();
		return false;
	}

	else if (password != passwordConfirm) {
		alert("Passwords don't match");
		passwordConfirm.focus();
		return false;
	}

	else if (!gender.selected) {
		alert("Select a gender");
		gender.focus();
		return false;
	}

	else if (!nationality) {
		alert("Select a nationality");
		nationality.focus();
		return false;
	}
}