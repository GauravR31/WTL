function validation() {
	var name = document.getElementsByName('name')[0].value;
	var city = document.getElementsByName('city')[0].value;
	var state = document.getElementsByName('state')[0].value;
	var nameRegex = /[a-zA-Z]/;
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;
	var passwordConfirm = document.getElementsByName('passwordConfirm')[0].value;
	var country = document.getElementsByName('country')[0].value;
	
	if (!(name.match(nameRegex))) {
		alert("Enter valid name");
		name.focus();
		return false;
	}

	else if (email == "" || (email.indexOf("@") < 0)) {
		alert("Enter valid email");
		email.focus();
		return false;
	}

	else if (password == "") {
		alert("Enter valid password");
		password.focus();
		return false;
	}

	else if (passwordConfirm == "") {
		alert("Enter valid password");
		passwordConfirm.focus();
		return false;
	}

	else if (password != passwordConfirm) {
		alert("Enter same password");
		passwordConfirm.focus();
		return false;
	}

	else if (country.selectedIndex < 1) {
		alert("Enter your country");
		country.focus();
		return false;
	}

	else if (city == "") {
		alert("Enter valid city");
		city.focus();
		return false;
	}

	else if (state == "") {
		alert("Enter valid city");
		state.focus();
		return false;
	}
}