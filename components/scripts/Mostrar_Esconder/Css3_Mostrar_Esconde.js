$("#css3").on('click',function(){

    var imgHtml5 = "/components/icones/html5-rosa.png";
    var imgCss3 = "/components/icones/css3-roxo.png";
    var imgJS = "/components/icones/javascript-rosa.png";
    var imgJquery = "/components/icones/jquery-rosa.png";
    var imgBootstrap = "/components/icones/bootstrap-rosa.png";
    var imgReact = "/components/icones/react-rosa.png";
    var imgVue = "/components/icones/vuejs-rosa.png";
    var imgPostgresql = "/components/icones/postgresql-rosa.png";
    var imgPhp  = "/components/icones/php-rosa.png";
    var imgJoomla = "/components/icones/joomla-rosa.png";
    var imgWordpress = "/components/icones/wordpress-rosa.png";
    var imgGit = "/components/icones/git-rosa.png";
    var imgGithub = "/components/icones/github-rosa.png";

    $("button").removeClass('ativadoHabilidades');
    $(this).addClass('ativadoHabilidades');

    $("#iconCss3").css("background-image", "url(" + imgCss3 + ")");
    $("#iconHtml5").css("background-image", "url(" + imgHtml5 + ")");
    $("#iconJavascript").css("background-image", "url(" + imgJS + ")");
    $("#iconJquery").css("background-image", "url(" + imgJquery + ")");
    $("#iconBootstrap").css("background-image", "url(" + imgBootstrap + ")");
    $("#iconReact").css("background-image", "url(" + imgReact + ")");
    $("#iconVue").css("background-image", "url(" + imgVue + ")");
    $("#iconPostgresql").css("background-image", "url(" + imgPostgresql + ")");
    $("#iconPhp").css("background-image", "url(" + imgPhp + ")");
    $("#iconJoomla").css("background-image", "url(" + imgJoomla + ")");
    $("#iconWordpress").css("background-image", "url(" + imgWordpress + ")");
    $("#iconGit").css("background-image", "url(" + imgGit + ")");
    $("#iconGithub").css("background-image", "url(" + imgGithub + ")");

    $("#textHtml5").hide();
    $("#textCss3").show();
    $("#textJavaScript").hide();
    $("#textJquery").hide();
    $("#textBootstrap").hide();
    $("#textReact").hide();
    $("#textVue").hide();
    $("#textPostgresql").hide();
    $("#textPhp").hide();
    $("#textJoomla").hide();
    $("#textWordpress").hide();
    $("#textGit").hide();
    $("#textGithub").hide();
});