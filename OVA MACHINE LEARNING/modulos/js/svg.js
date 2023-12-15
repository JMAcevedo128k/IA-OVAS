window.onload = function(){
    let s1 = Snap("#svg1");
    Snap.load("../assets/img_ova/recurso-02-02.svg", onSVGLoaded1);

    function onSVGLoaded1(data){
        s1.append( data );
        let click1 = Snap(".btn1");
        let click2 = Snap(".btn2");
        let click3 = Snap(".btn3");
        let click4 = Snap(".btn4");
        click1.click(function(){
            fun2(1);
            boton(1);
        });
        click2.click(function(){
            fun2(2);
            boton(2);
        });
        click3.click(function(){
            fun2(3);
            boton(3);
        });
        click4.click(function(){
            fun2(4);
            boton(4);
        });
        
    }
    function boton(num) {
        switch (parseInt(num)) {
            case 1:
                    $('#svg1 .btn1').attr('class' , 'cls-3 btn1 btn_rojo');
                    $('#svg1 .btn2').attr('class' , 'cls-3 btn2');
                    $('#svg1 .btn3').attr('class' , 'cls-3 btn3');
                    $('#svg1 .btn4').attr('class' , 'cls-3 btn4');
                break;
            case 2:
                    $('#svg1 .btn2').attr('class' , 'cls-3 btn2 btn_rojo');
                    $('#svg1 .btn1').attr('class' , 'cls-3 btn1');
                    $('#svg1 .btn3').attr('class' , 'cls-3 btn3');
                    $('#svg1 .btn4').attr('class' , 'cls-3 btn4');
                break;
            case 3:
                    $('#svg1 .btn3').attr('class' , 'cls-3 btn3 btn_rojo');
                    $('#svg1 .btn2').attr('class' , 'cls-3 btn2');
                    $('#svg1 .btn1').attr('class' , 'cls-3 btn1');
                    $('#svg1 .btn4').attr('class' , 'cls-3 btn4');
                break;
            case 4:
                $('#svg1 .btn4').attr('class' , 'cls-3 btn4 btn_rojo');
                $('#svg1 .btn2').attr('class' , 'cls-3 btn2');
                $('#svg1 .btn1').attr('class' , 'cls-3 btn1');
                $('#svg1 .btn3').attr('class' , 'cls-3 btn3');
                break;
            default:
                // statements_def
                break;
        }
    }
}