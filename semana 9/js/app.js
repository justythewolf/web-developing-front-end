var selector = document.querySelector("#ubicacion");
function obtenerLocalizacion() {
    navigator.geolocation.getCurrentPosition(mostrarPosicion);
}
function mostrarPosicion(posicion) {
  // posicion: Devuelve un objeto llamado "GeolocationPosition"
  console.log(posicion) 
  selector.innerHTML = "Latitud: " + posicion.coords.latitude +
  "<br>Longitud: " + posicion.coords.longitude;
}
//Funcion de Capturar, Almacenar datos y Limpiar campos
 
 
var botonGuardar = document.querySelector("#boton-guardar")
botonGuardar.addEventListener("click", function(){        

   //Captura de datos escrito en los inputs   
   var nom = document.querySelector("#nombre").value;
   var apel = document.querySelector("#apellido").value;
   
   //Guardando los datos en el LocalStorage
   localStorage.setItem("Nombre", nom);
   localStorage.setItem("Apellido", apel);
   
   //Limpiando los campos o inputs
   document.querySelector("#nombre").value = "";
   document.querySelector("#apellido").value = "";
});   

//Funcion Cargar y Mostrar datos
var botonCargar = document.querySelector("#boton-cargar")

botonCargar.addEventListener("click",function(){                       

   //Obtener datos almacenados
   var nombre = localStorage.getItem("Nombre");
   var apellido = localStorage.getItem("Apellido");

   //Mostrar datos almacenados   
   document.querySelector("#nombreGuardado").innerHTML = nombre;
   document.querySelector("#apellidoGuardado").innerHTML = apellido; 
});

/*
function permitirSoltar(ev) {
    ev.preventDefault();
  }
  
  function arrastrar(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function soltar(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
*/