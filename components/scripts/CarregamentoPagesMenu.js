$(function(){ 
    $("#content").load("pages/home.html"); 
     $('a').on('click', function (e) {
        e.preventDefault();
        $('#content').load($(this).attr('href'));
        $('a').removeClass('ativado');  
        $(this).addClass('ativado');                
    });
    $("#footer").load("components/footer.html"); 
    $("#tooltip").tooltip();
});