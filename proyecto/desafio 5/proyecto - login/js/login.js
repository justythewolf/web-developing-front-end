// Declarar 2 variables para poder ingresar (usuario y clave)
var miUsuario = "Thiago Intili";
var miClave = "contraseña1234";

//preguntar al usuario la clave y el usuario
var Usuario = prompt("Ingrese su usuario: ");
var Clave = prompt("Ingrese su clave: ");


// Crear condicional para indicar si usuario y clave coinciden 


//codigo anterior

if (miUsuario == Usuario && miClave == Clave) {
    alert("has logrado ingresar, su contraseña es correcta");
} else {
    alert("contraseña o nombre de usuario incorrectos, reintentar");
}


//codigo nuevo
/*
while (miUsuario == Usuario && miClave == Clave) {
    alert("has logrado ingresar, su contraseña es correcta");
    break;
}
while (miUsuario != Usuario || miClave != Clave) {
    alert("contraseña o nombre de usuario incorrectos, reintentar")
    var Usuario = prompt("Ingrese su usuario: ");
    var Clave = prompt("Ingrese su clave: ");   
}
*/