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

    $('#next').on('click', function () {
        $('#smartwizard').smartWizard("next");
    });

    $('#prev').on('click', function () {
        $('#smartwizard').smartWizard("prev");
    });

    $("#smartwizard").on("showStep", function (e, anchorObject, stepIndex, stepDirection) {
        console.log(stepIndex);
        /* $('.tab-pane').hide();
        $('#step-'+stepIndex).show(); */
        moveBarPorcentaje(stepIndex);
        switch (stepIndex) {
            default:
            // code block
        }
    });

    /* $("#md_actividad_1").animatedModal({
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
 */
    acordion_fun_ini();
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
    switch (stepIndex) {
        case 0:
            $("#prev").addClass('escondida');
            break;
        case 1:
            $("#prev").removeClass('escondida');
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        case 9:
            break;
        case 20:
            location.href="../index.html?modulo=1";
            $("#next").addClass('escondida');
            break;
        default:
        // code block
    }
});

function fun2(num) {
    $(
      ".fun2_content1, .fun2_content2, .fun2_content3, .fun2_content4"
    ).addClass("d-none");
    $(".fun2_content0").removeClass("invisible");
    switch (parseInt(num)) {
      case 1:
        $(".fun2_content1").removeClass("d-none");
        break;
      case 2:
        $(".fun2_content2").removeClass("d-none");
        break;
      case 3:
        $(".fun2_content3").removeClass("d-none");
        break;
      case 4:
        $(".fun2_content4").removeClass("d-none");
        break;
      default:
        // statements_def
        break;
    }
}

function funcion01(num){
    switch (parseInt(num)) {
        case 0:
          $(".pants").addClass("d-none");
          $(".pant"+num).removeClass("d-none");
          break;
        case 1:
            $(".pants").addClass("d-none");
            $(".pant"+num).removeClass("d-none");
          break;
        case 2:
            $(".pants").addClass("d-none");
            $(".pant"+num).removeClass("d-none");
          break;
        case 3:
            $(".pants").addClass("d-none");
            $(".pant"+num).removeClass("d-none");
          break;
        case 4:
            $(".pants").addClass("d-none");
            $(".pant"+num).removeClass("d-none");
          break;
        default:
          // statements_def
          break;
      }
}


function bolaActive(num) {
    $(".bola").removeClass('bolaActive');
    $(".bola" + num).addClass('bolaActive');
}
function bolaActive2(num) {
    $(".bola_2").removeClass('bolaActive2');
    $(".bola_2" + num).addClass('bolaActive2');
}

function conection(num){
    $(".conection").removeClass('conectionActive');
    $(".conection" + num).addClass('conectionActive');

    $(".ban_cuadro").addClass('d-none');
    $(".ban_cuadro" + num).removeClass('d-none');

}
function conection2(num){
    $(".conection_2").removeClass('conectionActive2');
    $(".conection_2" + num).addClass('conectionActive2');

    $(".ban_cuadro_2").addClass('d-none');
    $(".ban_cuadro_2" + num).removeClass('d-none');

}
function conection3(num){
    $(".conection_3").removeClass('conectionActive3');
    $(".conection_3" + num).addClass('conectionActive3');

    $(".ban_cuadro_3").addClass('d-none');
    $(".ban_cuadro_3" + num).removeClass('d-none');

}

function pantalla(num){
    switch (parseInt(num)) {
        case 0:
          $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 1:
          $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 2:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 3:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 4:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 5:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 6:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 7:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 8:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 9:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 10:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        case 11:
            $(".pantallas").addClass("d-none");
          $(".pantalla"+num).removeClass("d-none");
          break;
        default:
          // statements_def
          break;
    }
}


function acordion_fun1_click(num) {
    switch (parseInt(num)) {
        case 1:
            acordion_fun2_click(2);
            acordion_fun2_click(3);
            acordion_fun2_click(4);
            acordion_fun2_click(5);
            acordion_fun2_click(6);
            acordion_fun2_click(7);

            break;
        case 2:
            acordion_fun2_click(1);
            acordion_fun2_click(3);
            acordion_fun2_click(4);
            acordion_fun2_click(5);
            acordion_fun2_click(6);
            acordion_fun2_click(7);

            break;
        case 3:
            acordion_fun2_click(2);
            acordion_fun2_click(1);
            acordion_fun2_click(4);
            acordion_fun2_click(5);
            acordion_fun2_click(6);
            acordion_fun2_click(7);

            break;
        default:
            // statements_def
            break;
    }
    $('.acordeon #acordeon_1_' + num).css({ 'background': '#7E2760', 'padding': '10px' });
    $('.acordeon #acordeon_1_' + num + ' p').css({ 'display': 'block' });
    $('.acordeon #acordeon_1_' + num + ' .acordeon_content').css({ 'display': 'block' });
    $('.horizontal #acordeon_1_' + num).css({ 'width': '84%', 'height': '280px', '-moz-transition': 'width 0.2s ease-out', '-webkit-transition': 'width 0.2s ease-out', '-o-transition': 'width 0.2s ease-out', '-ms-transition': 'width 0.2s ease-out', 'transition': 'width 0.9s ease-out' });
    $('.horizontal #acordeon_1_' + num + ' .cir_acor, .horizontal #acordeon_1_' + num + ' .cordeon-columna').css({ 'display': 'none' });
    $('.text_vis' + num).addClass('texto_efect');
    $('.ICON'+num).addClass('d-none');

}
function acordion_fun2_click(num) {
    $('.acordeon #acordeon_1_' + num).css({ 'float': 'left', ' overflow': 'hidden', 'color': '#333', 'cursor': 'pointer', 'background': ' #C64B8B', 'margin': '3px', 'padding': '0px' });
    $('.acordeon #acordeon_1_' + num + ' p').css({ 'display': 'none' });
    $('.acordeon #acordeon_1_' + num + ' .acordeon_content').css({ 'display': 'none' });
    $('.horizontal #acordeon_1_' + num).css({ 'width': '15%', 'height': '280px', '-moz-transition': 'width 0.2s ease-out', '-webkit-transition': 'width 0.2s ease-out', '-o-transition': 'width 0.2s ease-out', '-ms-transition': 'width 0.2s ease-out', 'transition': 'width 0.9s ease-out' });
    $('.horizontal #acordeon_1_' + num + ' .cir_acor, .horizontal #acordeon_1_' + num + ' .cordeon-columna').css({ 'display': 'block' });
    $('.text_vis' + num).removeClass('texto_efect');
    $('.ICON'+num).removeClass('d-none');
    
}
function acordion_fun_ini() {
    $('.acordeon section').css({ 'float': 'left', ' overflow': 'hidden', 'color': '#333', 'cursor': 'pointer', 'background': ' #C64B8B', 'margin': '3px', 'padding': '0px' });
    $('.acordeon section p').css({ 'display': 'none' });
    $('.acordeon section .acordeon_content').css({ 'display': 'none' });
    $('.horizontal section').css({ 'width': '15%', 'height': '280px', '-moz-transition': 'width 0.2s ease-out', '-webkit-transition': 'width 0.2s ease-out', '-o-transition': 'width 0.2s ease-out', '-ms-transition': 'width 0.2s ease-out', 'transition': 'width 0.9s ease-out' });
}


function bote(num) {
    $(".boton_verde").removeClass('boton_verdeActive');
    $(".boton_verde" + num).addClass('boton_verdeActive');

    $(".bote_blue").addClass('d-none');
    $(".bote_blue" + num).removeClass('d-none');
}

function vista(num) {
    $(".vistas").addClass('d-none');
    $(".vista" + num).removeClass('d-none');
}