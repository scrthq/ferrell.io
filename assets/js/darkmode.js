if (getCookie("theme") == "dark") {
    $('article').addClass("dark");
}

$(document).ready(function() {
    document.cookie = "theme=light;path=/";
    $(".theme-toggle").click(function(e){
		e.preventDefault();
		$('html').toggleClass("dark");
		if ($('html').hasClass("dark")){
			document.cookie = "theme=dark;path=/";
		}
		else {
			document.cookie = "theme=light;path=/";
		}
	});
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
