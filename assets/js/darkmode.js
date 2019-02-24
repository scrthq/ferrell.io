if (getCookie("theme") == "dark") {
    $('html').addClass("dark");
} else if (getCookie("theme") == "code") {
    $('html').addClass("code");
} else {
    $('html').addClass("light");
}

$(document).ready(function() {
    $(".theme-toggle").click(function(e) {
        e.preventDefault();
        if ($('html').hasClass("dark")) {
            document.cookie = "theme=light;path=/";
            $("html").toggleClass("light",null,true);
            $("html").toggleClass("code",null,false);
            $("html").toggleClass("dark");
        } else if ($('html').hasClass("code")) {
            document.cookie = "theme=dark;path=/";
            $("html").toggleClass("dark",null,true);
            $("html").toggleClass("light",null,false);
            $("html").toggleClass("code");
        } else {
            document.cookie = "theme=light;path=/";
            $("html").toggleClass("code",null,true);
            $("html").toggleClass("dark",null,false);
            $("html").toggleClass("light",null,false);
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
