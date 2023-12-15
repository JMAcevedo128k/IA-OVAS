$(function () {
    initScorm();
    // SmartWizard initialize
    $('#smartwizard').smartWizard({
        autoAdjustHeight: true,
        enableUrlHash: true,
        transition: {
            animation: 'css', // Effect on navigation, none|fade|slideHorizontal|slideVertical|slideSwing|css(Animation CSS class also need to specify)
            prefixCss: 'animate__animated animate__faster',
            fwdShowCss: 'animate__bounceInLeft',
            fwdHideCss: 'animate__bounceOutRight',
            bckShowCss: 'animate__bounceInLeft',
            bckHideCss: 'animate__bounceOutRight'
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
            extraHtml: '' // Extra html to show on toolbar
        },
    });

    
});

window.onload = function() {
    setTimeout(function(){ $(".preload").fadeOut(1000) }, 3000);
};

$('.init-unidad').off('click').on('click', function(evt){
    var item = $(this).attr('data-id');
    location.href="modulos/unidad"+item+".html";
    evt.preventDefault();
});

$("#ingresar_ova").on("click", function () {
    $('#smartwizard').smartWizard("next");
});

$("#smartwizard").on("showStep", function (e, anchorObject, stepIndex, stepDirection, stepPosition) {
    if (stepIndex === 2) {
        $(".titulo_header_ova").show();
    } else {
        $(".titulo_header_ova").hide();
    }
});


function Openmodals(num){
    switch (parseInt(num)) {
        case 1:
            $(".modals_objects").addClass('d-none');
            $(".modalObj"+num).removeClass('d-none');

            $(".btnMd").removeClass('btnMdActive');
            $(".btnMd_"+num).addClass('btnMdActive');
            break;
        case 2:
            $(".modals_objects").addClass('d-none');
            $(".modalObj"+num).removeClass('d-none');

            $(".btnMd").removeClass('btnMdActive');
            $(".btnMd_"+num).addClass('btnMdActive');
            break;
        case 3:
            $(".modals_objects").addClass('d-none');
            $(".modalObj"+num).removeClass('d-none');

            $(".btnMd").removeClass('btnMdActive');
            $(".btnMd_"+num).addClass('btnMdActive');
            break;
    
        default:
            break;
    }
}
function Closemodals(num){
    switch (parseInt(num)) {
        case 1:
            $(".btnMd").removeClass('btnMdActive');
            $(".modalObj"+num).addClass('animate__backOutRight');
            setTimeout(function(){
                $(".modalObj"+num).addClass('d-none');
                $(".modalObj"+num).removeClass('animate__backOutRight');
            }, 1000);
            break;
        case 2:
            $(".btnMd").removeClass('btnMdActive');
            $(".modalObj"+num).addClass('animate__backOutRight');
            setTimeout(function(){
                $(".modalObj"+num).addClass('d-none');
                $(".modalObj"+num).removeClass('animate__backOutRight');
            }, 1000);
            break;
        case 3:
            $(".btnMd").removeClass('btnMdActive');
            $(".modalObj"+num).addClass('animate__backOutRight');
            setTimeout(function(){
                $(".modalObj"+num).addClass('d-none');
                $(".modalObj"+num).removeClass('animate__backOutRight');
            }, 1000);
            break;
    
        default:
            break;
    }
}