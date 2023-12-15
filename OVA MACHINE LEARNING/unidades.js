$(function () {
    initScorm();
    var url = new URL(window.location.href);
    var c = url.searchParams.get("modulo");
    var unidad = parseInt(c);

    $(".card_light_2, .card_light_3").addClass("card-inactiva-c");
    $(".card_light_2, .card_light_3").css('pointer-events','none');
    if (unidad == 1) {
        $(".card_light_2").removeClass("card-inactiva-c");
        $(".card_light_2").css('pointer-events','auto');

        Openmodals(3);
    }else if (unidad == 2) {
        $(".card_light_2").removeClass("card-inactiva-c");
        $(".card_light_2").css('pointer-events','auto');

        $(".card_light_3").removeClass("card-inactiva-c");
        $(".card_light_3").css('pointer-events','auto');
        Openmodals(3);
    }
    
});

window.onload = function() {
    setTimeout(function(){ $(".preload").fadeOut(1000) }, 3000);
};

$('.init-unidad').off('click').on('click', function(evt){
    var item = $(this).attr('data-id');
    location.href="modulos/unidad"+item+".html";
    evt.preventDefault();
});