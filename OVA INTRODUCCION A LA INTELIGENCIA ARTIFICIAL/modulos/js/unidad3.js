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
        case 26:
            location.href="../index.html?modulo=2";
            $("#next").addClass('escondida');
            break;
        default:
        // code block
    }
});

function Barrs(num){
    $(".pantBarr").addClass('d-none');
    $(".pantBarr"+num).removeClass('d-none');
}