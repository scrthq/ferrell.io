console.log("                                                               ..       ..           .\r\n  oec :                                                  x .d88'  x .d88'           @88>\r\n @88888                .u    .      .u    .               5888R    5888R            %8P          u.\r\n 8'*88%       .u     .d88B :@8c   .d88B :@8c       .u     '888R    '888R             .     ...ue888b\r\n 8b.       ud8888.  ='8888f8888r ='8888f8888r   ud8888.    888R     888R           .@88u   888R Y888r\r\nu888888> :888'8888.   4888>'88'    4888>'88'  :888'8888.   888R     888R          ''888E`  888R I888>\r\n 8888R   d888 '88%'   4888> '      4888> '    d888 '88%'   888R     888R            888E   888R I888>\r\n 8888P   8888.+'      4888>        4888>      8888.+'      888R     888R            888E   888R I888>\r\n *888>   8888L       .d888L .+    .d888L .+   8888L        888R     888R      .     888E  u8888cJ888\r\n 4888    '8888c. .+  ^'8888*'     ^'8888*'    '8888c. .+  .888B .  .888B .  .@8c    888&   '*888*P'\r\n '888     '88888%       'Y'          'Y'       '88888%    ^*888%   ^*888%  '%888'   R888'    'Y'\r\n  88R       'YP'                                 'YP'       '%       '%      ^*      ''\r\n  88>\r\n  48\r\n  '8\n\n");
console.log("Dark Mode theme toggle online @ ferrell.io (╯°□°)╯︵ ┻━┻");

if (getCookie("theme") == "dark") {
    $('html').addClass("dark");
    $('#toggleicon').toggleClass("fa-sun",true);
    $('#toggleicon').toggleClass("fa-code",false);
    $('#toggleicon').toggleClass("fa-moon",false);
} else if (getCookie("theme") == "code") {
    $('html').addClass("code");
    $('#toggleicon').toggleClass("fa-moon",true);
    $('#toggleicon').toggleClass("fa-code",false);
    $('#toggleicon').toggleClass("fa-sun",false);
} else {
    $('html').addClass("light");
    $('#toggleicon').toggleClass("fa-code",true);
    $('#toggleicon').toggleClass("fa-sun",false);
    $('#toggleicon').toggleClass("fa-moon",false);
}

$(document).ready(function() {
    $(".theme-toggle").click(function(e) {
        e.preventDefault();
        if ($('html').hasClass("dark")) {
            $('html').toggleClass("dark",false);
            $('html').toggleClass("light",true);
            document.cookie = "theme=light;path=/";
        } else if ($('html').hasClass("code")) {
            $('html').toggleClass("code",false);
            $('html').toggleClass("dark",true);
            document.cookie = "theme=dark;path=/";
        } else {
            $('html').toggleClass("light",false);
            $('html').toggleClass("code",true);
            document.cookie = "theme=code;path=/";
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
