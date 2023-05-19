/*jslint browser */

function menuToggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
}

$(document).ready(function() {
    var d = new Date();
	var year = d.getFullYear();
	if(year === 2022) {
		$(".copyright").html("<h3>&#169; " + year + " &nbsp;KEVIN KIM</h3>");
	} else {
		$(".copyright").html("<h3>&#169; 2022 &#8211; " + year + " &nbsp;KEVIN KIM</h3>");
	};
})