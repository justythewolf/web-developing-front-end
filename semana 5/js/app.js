/*
var repeticion = 0;
var numero = 1;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//el while solo se ejecuta si la condicion es verdadera!
//while (condicion a cumplir) {codigo que es ejecutado siempre cuando la condicion se cumpla}
while (repeticion <= 5) {
    console.log("esta es la repeticion N°: " + repeticion);
    repeticion++;
    if (repeticion == 6) {
        console.log("hiciste un bucle con while!");
    }
}
//el for solo repetira lo que este dentro de este cuantas veces lo asignes
//for ([exprecion inicial]; [condicion]; [exprecion incremento]) {codigo que es ejecutado}
for (i = 0; i < 5; i++) {
    console.log(numero);
    numero++;
}
//repetira cada valor de la array hasta que termine
//for ([variableTemporal] of [nombre de la array]) {instruccion}
for (number of numbers) {
    console.log(number);
} 
*/
/*
var numero_secreto = 7;
var correcta = false;
var respuesta; 


while (correcta == false) {
  respuesta = prompt("elija un numero del 1 al 10");
  
  if (parseInt(respuesta) == numero_secreto) {
    correcta = true;
  }
  else {
    alert("El número secreto no es " + respuesta + ". Intentá nuevamente.");
  }
}
alert("¡Adivinaste! el número secreto era " + respuesta); 
*/
var provincias = ["Buenos Aires","Catamarca","Chaco","Chubut","Córdoba","Corrientes","Entre Ríos","Formosa","Jujuy","La Pampa","La Rioja","Mendoza","Misiones","Neuquén","Río Negro","Salta","San Juan","San Luis","Santa Cruz","Santa Fe","Santiago del Estero","Tierra del Fuego", "Tucumán"];

for (provincia of provincias) {
    console.log("la provincia es: " + provincia);
}