var scorm = pipwerks.SCORM;
function EditarLocation(location){
    Mensaje("Marcando Localizacion.");

    var callSucceeded2 = scorm.set("cmi.core.lesson_location", location.toString());
    Mensaje("Curso en la pos "+location + callSucceeded2);
}

function ObtenerLocation(){
    var locacionleson = scorm.get("cmi.core.lesson_location");
    console.log(locacionleson);
    return locacionleson;
}

function endScorm(){
    Mensaje("Conexion terminada.");
    var callSucceeded = scorm.quit();
    Mensaje("Termino correctamente? " +callSucceeded);
}

function ObtenerNombre(){
    var nombreUser = scorm.get("cmi.core.student_name");
    console.log(nombreUser);
    return nombreUser;
}

function Mensaje(msg){
    console.log(msg);
}

function initScorm(){
    scorm.version = "1.2";
    Mensaje("Iniciando el Curso.");
    var callSucceeded = scorm.init();
    Mensaje("Curso iniciado correctamente? " + callSucceeded);
    ObtenerNombre();
    ObtenerLocation();
}