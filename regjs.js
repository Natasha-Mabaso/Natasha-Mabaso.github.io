//add an alert box,as a thank you for choosing hv (when the user submits the form).
window.onload = function() {
	var msg = "We thank you for making HILLVALLEY DAYCARE your school of choice for your little one, we trust that together we will make your toddler’s years filled with love and joy.";
	var submit = document.getElementById("tnx note");
	submit.onclick = function() {
		alert msg;
	}
}