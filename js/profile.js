//global variables
$(document).ready(function() {
	var user = localStorage.getItem("useremail");
	document.getElementByID("user-link-name").text = user;
});

// function profileNavigate()
// {
// 	if (user == "nell@northwestern.com")
// 	{
// 		document.getElementByID("nell-profile").style.display = "block";
// 	}
// 	else if (user == "josh@northwestern.edu") {
// 		document.getElementByID("user-link-name").text = "Hi, Joshua";
// 		document.getElementByID("nell-profile").style.display = "none";
// 		document.getElementByID("josh-profile").style.display = "block";
// 	}
// 	window.location.href = "UserProfile.html";
// 	return true;
// }