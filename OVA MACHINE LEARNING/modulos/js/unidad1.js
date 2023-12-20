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
            entrar();
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

    $(".conection").removeClass('text-white');
    $(".conection" + num).addClass('text-white');

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








/* RECURSO # 1 BARRA DESLIZADORA HORIZONTAL */

/* se debe hacer el llamado a esta funcion el el Ready o en el case correspondiente de la pantalla donde se vaya a ubicar*/
function entrar() {
    $(".i1").html('')
    var elementoPadre1 = document.querySelector(".inputDiv.i1");
    var elementoPadre2 = document.querySelector(".inputDiv.i2");
    var inputsRy = [];
    // cantidad de texto
    var i = new Input(4);
    i.crear(elementoPadre1);
    inputsRy.push(i);
    // cantidad de texto
    var i2 = new Input(4);
    i2.att.value = 70;
    i2.att.min = 20;
    i2.att.max = 120;
    i2.crear(elementoPadre2);
    inputsRy.push(i2);

    for (var n = 0; n < inputsRy.length; n++) {
        (function (n) {
            inputsRy[n].input.addEventListener("input", function () {
                /* se define a que funcion dentro de la funcion input se quiere entrar */
                inputsRy[n].actualizar();
            }, false)
        }(n));
    }
}
/* esta funcion la usaran los distintos tipos de deslizadores  */
function Input(num) {
    //<input type="range" value="35" min="0" max="100" autocomplete="off" step="1">
    this.att = {};
    this.att.type = "range";
    this.att.value = 0;
    this.att.min = 0;
    this.att.max = num;
    this.att.autocomplete = "off";
    this.att.step = "1";
    this.input;
    this.att.style = "background: #fff0;"
    this.output;

    this.crear = function (elementoPadre) {
        // crea un nuevo elemento input
        this.input = document.createElement("input");
        //para cada propiedad del objeto att establece un nuevo atributo del elemento input
        for (var name in this.att) {
            if (this.att.hasOwnProperty(name)) {
                this.input.setAttribute(name, this.att[name]);
            }
        }
        // crea un nuevo elemento div
        this.output = document.createElement("div");
        // establece el valor del atributo class del nuevo div
        this.output.setAttribute("class", "output");
        // y el contenido (innerHTML) de este
        this.output.innerHTML = this.att.value;

        // inserta los dos elementos creados al final  del elemento Padre
        elementoPadre.appendChild(this.input);
        elementoPadre.appendChild(this.output);
    }

    /* esta parte es la encargada de hacer el llamado correspondiente a la funcion que realizara la funcionalidad deseada */
    this.actualizar = function () {
        /* se llama a la funcion deseada y se le manda el valor desde el 0 en adelante*/
        lineaHorizontal(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }

    this.actualizar2 = function () {
        lineaVertical(this.input.value);
        this.output.innerHTML = this.input.value;
        this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function () {
    });
}
function lineaHorizontal(num) {
    $(".deslizador").addClass('d-none');
    $(".desliza_" + num).removeClass('d-none');
}


function showBackCardU1_5(num) {
    $(".front1").removeClass('d-none'); $(".front2").removeClass('d-none'); $(".front3").removeClass('d-none'); $(".front4").removeClass('d-none');
    $(".back1").addClass('d-none'); $(".back2").addClass('d-none'); $(".back3").addClass('d-none'); $(".back4").addClass('d-none');

    if (num == 1) {
        $(".front1").addClass('d-none');
        $(".back1").removeClass('d-none');
        

    } else if (num == 2) {
        $(".front2").addClass('d-none');
        $(".back2").removeClass('d-none');
        
        
    } else if (num == 3) {
        $(".front3").addClass('d-none');
        $(".back3").removeClass('d-none');
        
        
    } else if (num == 4) {
        $(".front4").addClass('d-none');
        $(".back4").removeClass('d-none');
    } 
}


function barroco(num) {
    switch (parseInt(num)) {
        case 1:
            $('.btn_barroco').removeClass('btn_barrocoActive');
            $('.barroco1').addClass('btn_barrocoActive');

            $('.ban_blue').addClass('d-none');
            $('.banB_1').removeClass('d-none');

            $('.triangulo').addClass('invisible');
            $('.triangulo_1').removeClass('invisible');


            break;
        case 2:
            $('.btn_barroco').removeClass('btn_barrocoActive');
            $('.barroco2').addClass('btn_barrocoActive');

            $('.ban_blue').addClass('d-none');
            $('.banB_2').removeClass('d-none');

            $('.triangulo').addClass('invisible');
            $('.triangulo_2').removeClass('invisible');
            break;
        case 3:
            $('.btn_barroco').removeClass('btn_barrocoActive');
            $('.barroco3').addClass('btn_barrocoActive');

            $('.ban_blue').addClass('d-none');
            $('.banB_3').removeClass('d-none');

            $('.triangulo').addClass('invisible');
            $('.triangulo_3').removeClass('invisible');
            break;
        case 4:
            $('.btn_barroco').removeClass('btn_barrocoActive');
            $('.barroco4').addClass('btn_barrocoActive');

            $('.ban_blue').addClass('d-none');
            $('.banB_4').removeClass('d-none');

            $('.triangulo').addClass('invisible');
            $('.triangulo_4').removeClass('invisible');
            break;
        case 5:
            $('.btn_barroco').removeClass('btn_barrocoActive');
            $('.barroco5').addClass('btn_barrocoActive');

            $('.ban_blue').addClass('d-none');
            $('.banB_5').removeClass('d-none');

            $('.triangulo').addClass('invisible');
            $('.triangulo_5').removeClass('invisible');
            break;
        default:
            break;
    }
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


function target1(){
    $('.content_targetB').removeClass('invisible');
}


function grises(num){
    $('.grises'+num).addClass('grisesActive'+num);

    $(".infras").addClass('d-none');
    $(".infras"+num).removeClass('d-none');
}
