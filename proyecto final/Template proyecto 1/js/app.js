var registros = [];
var mail; 
function registrarse() {
    var boton = document.getElementById("registrarse");
    boton.addEventListener("click", registrarMail());
    
}

function registrarMail() {
    mail = document.querySelector("#registrado").value;
    registros.push(mail);
    console.log(registros);
}
