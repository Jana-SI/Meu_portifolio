$(function () {
    $("#content").load("pages/home.html");

    $('a').on('click', function (e) {
        e.preventDefault();
        $('#content').load($(this).attr('href'));
        $('a').removeClass('ativado');
        $(this).addClass('ativado');
    });

    // Função para atualizar tooltips com base no tamanho da tela
    function atualizarTooltips() {
        var tam = $(window).width();
        console.log(tam);

        if (tam <= 577) {
            // Adicione o atributo 'title' aos elementos para ativar os tooltips
            $("#tooltipHome").attr('title', 'Home');
            $("#tooltipSobre").attr('title', 'Sobre');
            $("#tooltipHabilidades").attr('title', 'Habilidades');
            $("#tooltipProjetos").attr('title', 'Projetos');
        } else {
            // Remova o atributo 'title' para desativar os tooltips
            $("#tooltipHome").removeAttr('title');
            $("#tooltipSobre").removeAttr('title');
            $("#tooltipHabilidades").removeAttr('title');
            $("#tooltipProjetos").removeAttr('title');
        }
    }

    // Chame a função ao carregar a página
    atualizarTooltips();

    // Chame a função sempre que a janela for redimensionada
    $(window).on('resize', function () {
        atualizarTooltips();
    });
});