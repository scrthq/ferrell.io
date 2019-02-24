if (getCookie("theme") == "dark") {
    $('main').addClass("dark");
} else if (getCookie("theme") == "code") {
    $('main').addClass("code");
} else {
    $('main').addClass("light");
}

$(document).ready(function() {
    $(".theme-toggle").click(function(e) {
        e.preventDefault();
        if ($('main').hasClass("dark")) {
            document.cookie = "theme=light;path=/";
            $("main").toggleClass("light",null,true);
            $("main").toggleClass("code",null,false);
            $("main").toggleClass("dark");
        } else if ($('main').hasClass("code")) {
            document.cookie = "theme=dark;path=/";
            $("main").toggleClass("dark",null,true);
            $("main").toggleClass("light",null,false);
            $("main").toggleClass("code");
        } else {
            document.cookie = "theme=light;path=/";
            $("main").toggleClass("code",null,true);
            $("main").toggleClass("dark",null,false);
            $("main").toggleClass("light",null,false);
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
