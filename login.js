// jQuery Page Transitions
$(document).ready(function() {
  $("body").css("display", "none");

	$("body").fadeIn(2000);

	$("a.transition").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeIn(1000, redirectPage);
	});

	function redirectPage() {
		window.location = linkLocation;
	}
});

/* togglePassword ():
 * 
 * Description: Toggle the password field to show or hide password characters.
 * 
 */
function togglePassword () {
	var password = document.getElementById('password');
	var toggle = document.getElementById('toggle');

	if(password.type == "password") {
		password.type = "text";
		toggle.value = "Hide Password";
	} else {
		password.type = "password";
		toggle.value = "Show Password";
	}
}
/* login ():
 * 
 * Description: Validate Username/Password
 * 
 */
function login () {
	alert("success?");
}
