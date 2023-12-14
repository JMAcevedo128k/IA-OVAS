$(function () {
    var url = new URL(window.location.href);
    var location_ova = url.searchParams.get("location");
    initScorm();
    // SmartWizard initialize
    $('#smartwizard').smartWizard({
        autoAdjustHeight: true,
        enableUrlHash: true,
        transition: {
            animation: 'slideSwing', // Animation effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
        },
        keyboard: {
            keyNavigation: true, // Enable/Disable keyboard navigation(left and right keys are used if enabled)
            keyLeft: [37], // Left key code
            keyRight: [39] // Right key code
        },
        toolbar: {
            position: 'bottom', // none|top|bottom|both
            showNextButton: false, // show/hide a Next button
            showPreviousButton: false, // show/hide a Previous button
            extraHtml: '' // Extra html to show on the toolbar
        },
    });

    // Toma la variable location que llego por URL valida si existe, y realiza en enlace hasta la ultima pantalla guardada Scorm
    if (location_ova === null || location_ova === '' || location_ova === 'null') {
        console.log(location_ova+" NO existe location");
    }else{
        $('#smartwizard').smartWizard("goToStep", parseInt(location_ova));
        if (parseInt(location_ova) != 0) {
            $("#prev").addClass('mostrada');
            $("#prev").removeClass('escondida');
        }
    }

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
    });

    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
    });
    

    $("#smartwizard").on("showStep", function (e, anchorObject, stepIndex, stepDirection) {
        moveBarPorcentaje(stepIndex);
        switch (stepIndex) {
            default:
            // code block
        }
    });

    

    $("#md_actividad_1").animatedModal({
        animatedIn:'zoomIn',
        animatedOut:'bounceOut',
        color:'#fff',
        beforeOpen: function() {

            var children = $(".thumb");
            var index = 0;

            function addClassNextChild() {
                if (index == children.length) return;
                children.eq(index++).show().velocity("transition.slideRightIn", { opacity:1, stagger: 450,  defaultDuration: 100 });
                window.setTimeout(addClassNextChild, 500);
            }

            addClassNextChild();

        },
        afterClose: function() {
            $(".thumb").hide();
        }
    });

});

function moveBarPorcentaje(stepIndex) {
    var pagestotal = ($("#smartwizard .nav-link").length) - 1;
    console.log(pagestotal);
    var regla = (stepIndex / pagestotal) * 100;
    console.log(regla);
    var elem = document.getElementById("myBar");
    $(elem).animate({
        width: regla + "%"
    }, 800);
}

$("#ingresar_ova").on("click", function () {
    $('#smartwizard').smartWizard("next");
});

$("#smartwizard").on("showStep", function (e, anchorObject, stepIndex, stepDirection, stepPosition) {
    if (stepIndex === 2) {
        $(".titulo_header_ova").show();
    } else {
        $(".titulo_header_ova").hide();
    }

    console.log(stepIndex);
    switch (stepIndex) {
        case 0:
            $("#prev").addClass('escondida');
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 1:
            $("#prev").removeClass('escondida');
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 2:
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 3:
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 4:
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 5:
            $(".div_titulo_mod").addClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            $(".activi").removeClass('d-none');
            break;
        case 6:
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            break;
        case 7:
            
            break;
        case 8:
            $(".div_titulo_mod").removeClass('d-none');
            $(".div_titulo_activi").addClass('d-none');
            $("#next").removeClass('escondida');
            break;
        case 9:
            $(".div_titulo_mod").addClass('d-none');
            $(".div_titulo_activi").addClass('d-none');

            $("#next").addClass('escondida');
            break;
        default:
        // code block
    }
});


function infoModals(num){
    $('.animatedModal').removeClass('animate__bounceOutLeft');
    $('.animatedModal').addClass('d-none');
    $('.animatedModal'+num).removeClass('d-none');
}

function closeInfomodals(){
        $('.animatedModal').addClass('animate__bounceOutLeft');
        setTimeout(function() {
            $('.animatedModal').addClass('d-none');
            /* $('.animatedModal'+num).removeClass('d-none'); */
        }, 800); // 2000 milisegundos (2 segundos)
}

/*RECURSO #20 SUBMENÚ BOTONES A LA DERECHA */
function botonCuadro(num) {
    switch (parseInt(num)) {
        case 1:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C1').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP1').removeClass('d-none');
            break;
        case 2:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C2').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP2').removeClass('d-none');
            break;
        case 3:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C3').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP3').removeClass('d-none');
            break;
        case 4:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C4').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP4').removeClass('d-none');
            break;
        case 5:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C5').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP5').removeClass('d-none');
            break;
        case 6:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C6').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP6').removeClass('d-none');
            break;
        case 7:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C7').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP7').removeClass('d-none');
            break;
        case 8:
            $('.boton_cuadro').removeClass('boton_cuadroActive');
            $('.boton_C8').addClass('boton_cuadroActive');

            $('.ban_piel').addClass('d-none');
            $('.banP8').removeClass('d-none');
            break;
        default:
            // statements_def 
            break;
    }
}








$("#video1").on('hidden.bs.modal', function () {
    paraIframe(1);
});

$("#video2").on('hidden.bs.modal', function () {
    paraIframe(2);
});
$("#video3").on('hidden.bs.modal', function () {
    videos(3);
});

$("#video4").on('hidden.bs.modal', function () {
    paraIframe(4);
});
$("#video5").on('hidden.bs.modal', function () {
    paraIframe(5);
});
function paraIframe(num){
    switch (parseInt(num)) {
        case 1:
            $('.vid1').attr('src', $('.vid1').attr('src'));
            break;
        case 2:
            $('.vid2').attr('src', $('.vid2').attr('src'));
            break;
        case 3:
            $('.vid3').attr('src', $('.vid3').attr('src'));
            break;
        case 4:
            $('.vid4').attr('src', $('.vid4').attr('src'));
            break;
        case 5:
            $('.vid5').attr('src', $('.vid5').attr('src'));
            break;
        case 6:
            $('.vid6').attr('src', $('.vid6').attr('src'));
            break;
        default:
            break;
    }
    
}
function videos(num){
    switch (parseInt(num)) {
        case 1:
            var videointro = document.getElementById('video_intro1');
            videointro.pause();
            break;
        case 2:
            var videointro = document.getElementById('video_intro2');
            videointro.pause();
            break;
        case 3:
            var videointro = document.getElementById('video_intro3');
            videointro.pause();
            break;
        case 4:
            var videointro = document.getElementById('video_intro4');
            videointro.pause();
            break;
        case 5:
            var videointro = document.getElementById('video_intro5');
            videointro.pause();
            break;
        case 6:
            var videointro = document.getElementById('video_intro6');
            videointro.pause();
            break;
        case 7:
            var videointro = document.getElementById('video_intro7');
            videointro.pause();
            break;
        case 8:
            var videointro = document.getElementById('video_intro8');
            videointro.pause();
            break;
        case 9:
            var videointro = document.getElementById('video_intro9');
            videointro.pause();
            break;
        case 10:
            var videointro = document.getElementById('video_intro10');
            videointro.pause();
            break;
        default:
            break;
    }
}


function roses(num){
    $('.indis'+num).addClass('d-none');
    $('.indis1_'+num).removeClass('d-none');
}


function grem(num){
    switch (parseInt(num)) {
        case 1:
            $('.ban_grem').removeClass('invisible');
            $('.flech_coff').removeClass('invisible');
            break;
        case 2:
            $('.ban_blus').removeClass('invisible');
            break;
        default:
            break;
    }
}


function bolaActive(num) {
    $(".bola").removeClass('bolaActive');
    $(".bola" + num).addClass('bolaActive');

    $(".ICO").addClass('d-none');
    $(".ICO" + num).removeClass('d-none');
}


function giradoras(num){
    switch (parseInt(num)) {
        case 1:
            $('.carta1').toggleClass('flipped');

            $('.carta2').removeClass('flipped');
            $('.carta3').removeClass('flipped');
            $('.carta4').removeClass('flipped');
            $('.carta5').removeClass('flipped');
            break;
        case 2:
            $('.carta2').toggleClass('flipped');

            $('.carta1').removeClass('flipped');
            $('.carta3').removeClass('flipped');
            $('.carta4').removeClass('flipped');
            $('.carta5').removeClass('flipped');
            break;
        case 3:
            $('.carta3').toggleClass('flipped');

            $('.carta5').removeClass('flipped');
            $('.carta2').removeClass('flipped');
            $('.carta1').removeClass('flipped');
            $('.carta4').removeClass('flipped');
            break;
        case 4:
            $('.carta4').toggleClass('flipped');

            $('.carta2').removeClass('flipped');
            $('.carta5').removeClass('flipped');
            $('.carta3').removeClass('flipped');
            $('.carta1').removeClass('flipped');
            break;
        case 5:
            $('.carta5').toggleClass('flipped');

            $('.carta2').removeClass('flipped');
            $('.carta4').removeClass('flipped');
            $('.carta3').removeClass('flipped');
            $('.carta1').removeClass('flipped');
            break;
        default:
            break;
    }
}