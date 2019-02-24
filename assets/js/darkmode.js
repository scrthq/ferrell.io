if (getCookie("theme") == "dark") {
    $('body').addClass("dark");
} else if (getCookie("theme") == "code") {
    $('body').addClass("code");
} else {
    $('body').addClass("light");
}

$(document).ready(function() {
    $(".theme-toggle").click(function(e) {
        e.preventDefault();
        if ($('body').hasClass("dark")) {
            document.cookie = "theme=light;path=/";
            $("body").toggleClass("light",null,true);
            $("body").toggleClass("code",null,false);
            $("body").toggleClass("dark");
        } else if ($('body').hasClass("code")) {
            document.cookie = "theme=dark;path=/";
            $("body").toggleClass("dark",null,true);
            $("body").toggleClass("light",null,false);
            $("body").toggleClass("code");
        } else {
            document.cookie = "theme=light;path=/";
            $("body").toggleClass("code",null,true);
            $("body").toggleClass("dark",null,false);
            $("body").toggleClass("light",null,false);
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
