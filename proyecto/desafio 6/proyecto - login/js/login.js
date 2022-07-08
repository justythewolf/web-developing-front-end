//codigo nuevo

//funcion para ingresar clave y usuario :3

function ingresarData(){
    var  miUsuario = "Thiago Intili";
    var miClave = "contraseña1234";
    var Usuario = prompt("Ingrese su usuario: ");
    var Clave = prompt("Ingrese su clave: ");
    while (miUsuario == Usuario && miClave == Clave) {
        alert("has logrado ingresar, su contraseña es correcta");
        break;
    }
    while (miUsuario != Usuario || miClave != Clave) {
        var Usuario = prompt("Ingrese su usuario: ");
        var Clave = prompt("Ingrese su clave: ");   
        alert("contraseña o nombre de usuario incorrectos, reintentar")
    }
}

// funcion para inyectar el html nuevo con la informacion de la cuenta

function mostrarPerfil() {
    nuevoHTML = 
    "<div id='caja'>" + 
    "<h3>" + miPerfil[0] + "</h3>" + 
    "<p>" + miPerfil[1] + "</p>" + 
    "<img src='miPerfil[3]'></img>" +
    "<h4>" + miPerfil[4] + "</h4>" + 
    "<hr>" +
    "<a>" + miPerfil[2] + "</a>" + 
    "</div>";

}

// array con la informacion del usuario

var miPerfil = ["Thiago Intili", "16", "thiagointili@gmail.com", "../img/chico2", "Ingeniero en sistemas"]; //crear array con datos del perfil del usuario 
