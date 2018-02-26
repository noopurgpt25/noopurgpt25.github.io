
function validateLogin() {
	var user = document.forms['login-form']['loginname'].value;
	localStorage.setItem("useremail", user);
	var pass = document.forms['login-form']['loginpassword'].value;
	if (user == "" || pass == ""){
		document.getElementById("alert-box").style.display = "block";
		return false;
	}

	if (user == "nell@northwestern.edu")
	{
		window.location.href="TaskPageUser1.html";
		return true;
	}

	else
	{

		window.location.href="TaskPageUSer2.html";
		return true;
	}
	
}

function profileNavigate()
{
	var user = localStorage.getItem("useremail");
	if (user == "nell@northwestern.com")
	{
		document.getElementByID("nell-profile").style.display = "block";
	}
	else if (user == "josh@northwestern.edu") {
		document.getElementByID("user-link-name").text = user;
		document.getElementByID("nell-profile").style.display = "none";
		document.getElementByID("josh-profile").style.display = "block";
	}
	// window.location.href = "UserProfile.html";
	return true;
}

function validateSignUp() {
	if($("#myName" ).val()=='')
	{
		$("#myName").css("border-color", "#FF0000");
			 $("#error_name").text("* You have to enter your first name!");
		return false;
	}
	else {
		$("#myName").css("border-color", "");
		$("#error_name").text("");
	}
	if($("#lastname" ).val()=='')
		{
		$("#lastname").css("border-color", "#FF0000");
		$("#error_lastname").text("* You have to enter your Last name!");
	return false;
	}
	else {
		$("#lastname").css("border-color", "");
		$("#error_lastname").text("");
	}
	if($("#dob" ).val()=='')
		{
		$("#dob").css("border-color", "#FF0000");
		$("#error_dob").text("* You have to enter your Date of Birth!");
	return false;
	}
	else {
		$("#dob").css("border-color", "");
		$("#error_dob").text("");
	}
		
	if($("#email" ).val()=='')
		{
		$("#email").css("border-color", "#FF0000");
			 $("#error_email").text("* Enter your Email!");
			 return false;
	}
	else {
		$("#email").css("border-color", "");
		$("#error_email").text("");
	}
	if($("#password" ).val()=='')
		{
		$("#password").css("border-color", "#FF0000");
			 $("#error_pass").text("* Enter your Password!");
			 return false;
	}
	else {
		$("#password").css("border-color", "");
		$("#error_pass").text("");
	}
	if($("#password_verify" ).val()=='')
		{
		$("#password_verify").css("border-color", "#FF0000");
			 $("#error_pass_verify").text("* Enter your Password again to verify!");
			 return false;
	}
	else if ($("#password").val() != $("#password_verify").val())
	{
		$("#password_verify").css("border-color", "#FF0000");
		 $("#error_pass_verify").text("* Password does not match!");
		 return false;
	}
	else {
		$("#password_verify").css("border-color", "");
		 $("#error_pass_verify").text("");
		
	}
	alert("Registeration done!");
	window.location.href ="login.html";
	return true;
}


