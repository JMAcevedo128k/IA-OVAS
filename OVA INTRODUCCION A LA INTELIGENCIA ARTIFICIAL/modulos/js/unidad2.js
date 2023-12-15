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
    entrar();
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
        case 22:
            location.href="../index.html?modulo=2";
            $("#next").addClass('escondida');
            break;
        default:
        // code block
    }
});

function cuadros(num){
    $(".cuadro").removeClass('cuadroActive');
    $(".cuadro"+num).addClass('cuadroActive');

    $(".contents").addClass('d-none');
    $(".contents"+num).removeClass('d-none');
}

function caja(num){
    $(".caja_verde").removeClass('caja_verdeActive');
    $(".caja_verde"+num).addClass('caja_verdeActive');

    $(".cuadro_verde").addClass('d-none');
    $(".cuadro_verde"+num).removeClass('d-none');
}

function nube(num){
    $(".nube").addClass('d-none');
    $(".nube"+num).removeClass('d-none');

    $(".gris").removeClass('grisActive');
    $(".gris"+num).addClass('grisActive');
}

function entrar() {
    $(".i1").html('')    
    var elementoPadre1 = document.querySelector(".inputDiv.i1");
    var elementoPadre2 = document.querySelector(".inputDiv.i2");
    var inputsRy = [];  
    // cantidad de texto
    var i = new Input(2);
    i.crear(elementoPadre1);
    inputsRy.push(i);
    // cantidad de texto
    var i2 = new Input(2);
    i2.att.value = 70;
    i2.att.min = 20;
    i2.att.max = 120;
    i2.crear(elementoPadre2);
    inputsRy.push(i2);
 
    for (var n = 0; n < inputsRy.length; n++) {
      (function(n) {
        inputsRy[n].input.addEventListener("input", function() {
            /* se define a que funcion dentro de la funcion input se quiere entrar */
          inputsRy[n].actualizar();
        }, false)
      }(n));
    }
}
function entrar2() {
    $(".i3").html('')    
    var elementoPadre1 = document.querySelector(".inputDiv.i3");
    var elementoPadre2 = document.querySelector(".inputDiv.i4");
    var inputsRy = [];  
    // cantidad de texto
    var i = new Input(2);
    i.crear(elementoPadre1);
    inputsRy.push(i);
    // cantidad de texto
    var i2 = new Input(2);
    i2.att.value = 70;
    i2.att.min = 20;
    i2.att.max = 120;
    i2.crear(elementoPadre2);
    inputsRy.push(i2);
 
    for (var n = 0; n < inputsRy.length; n++) {
      (function(n) {
        inputsRy[n].input.addEventListener("input", function() {
            /* se define a que funcion dentro de la funcion input se quiere entrar */
          inputsRy[n].actualizar2();
        }, false)
      }(n));
    }
}

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
   
    this.crear = function(elementoPadre) {
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
    this.actualizar = function() {
        /* se llama a la funcion deseada y se le manda el valor desde el 0 en adelante*/
      lineaHorizontal(this.input.value);
      this.output.innerHTML = this.input.value;
      this.att.value = this.input.value;
    }

    this.actualizar2 = function() {
      lineaVertical(this.input.value);
      this.output.innerHTML = this.input.value;
      this.att.value = this.input.value;
    }
    $("input[type=range]").on('change', function () {
    });
}

function lineaHorizontal(num){
    $(".deslizador").addClass('d-none');
    $(".desliza_"+num).removeClass('d-none');
}

function dash(num){
    $(".blass").addClass('d-none');
    $(".blass"+num).removeClass('d-none');

    $(".dash").removeClass('dashActive');
    $(".dash"+num).addClass('dashActive');
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

function acordeon(num){
    switch (parseInt(num)) {
        case 0:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        case 1:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        case 2:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        case 3:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        case 4:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        case 5:
            $('.bodyCordeon').addClass('d-none');
            $('.bodyCordeon'+num).removeClass('d-none');
            break;
        default:
            // statements_def 
            break;
    }
}


$('#imagen13').on('show.bs.modal', function () {
    entrar2();
    // Puedes realizar acciones adicionales cuando el modal se abre.
});

function lineaVertical(num){
    $('.div').addClass('d-none');
    $('.div'+num).removeClass('d-none');
}