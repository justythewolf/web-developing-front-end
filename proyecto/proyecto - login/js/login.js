//codigo nuevo

//funcion para ingresar clave y usuario :3

function ingresarData(){
    var usuario = document.querySelector("#usuario").value;
    var contrasenia = document.querySelector("#contrasenia").value;
    var error = document.querySelector(".error"); 
    if (usuario == miPerfil[0] && contrasenia == miPerfil[5]) {
        mostrarPerfil();
    }
    else if (usuario != miPerfil[0] || contrasenia != miPerfil[5]) {  
        error.style = "display:block;";
        error.innerHTML = "contraseña o nombre de usuario incorrectos, reintentar";
    }
}

// funcion para inyectar el html nuevo con la informacion de la cuenta

function mostrarPerfil() {
    var main = document.querySelector("#main");
    main.innerHTML = 
    "<div id='caja'>" + 
    "<h3>" + miPerfil[0] + "</h3>" + 
    "<p>" + miPerfil[1] + "</p>" + 
    "<img src=" + miPerfil[3] +">" + "</img>" +
    "<h4>" + miPerfil[4] + "</h4>" + 
    "<hr>" +
    "<a>" + miPerfil[2] + "</a>" + 
    "<button id=" + "agregarInfo" + ">" + "Agregar descripción" + "</button>" +
    "<div id='info'>" + "</div>" +
    "</div>";
    var agregarInfo = document.querySelector("#agregarInfo");
    agregarInfo.addEventListener("click", fnAgregarInfo);
}


function fnAgregarInfo() {
    var parrafo = prompt("que informacion quiere agregar a su perfil?");
    var informacion = document.querySelector("#info");
    informacion.innerHTML = parrafo;
    var agregarInfo = document.querySelector("#agregarInfo")
    agregarInfo.innerHTML = "MODIFICAR";
}


// array con la informacion del usuario

var miPerfil = ["Thiago Intili", "16", "thiagointili@gmail.com", "img/chico2.jpg", "Ingeniero en sistemas", "1234"]; //crear array con datos del perfil del usuario

