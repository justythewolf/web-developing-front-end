/*
var numero1, numero2;
var resultado;

numero1 = prompt("elija un numero");
numero2 = prompt("elija un segundo numero");

parseInt(numero1);
parseInt(numero2);

if (numero1 > numero2) {
    alert("el primer numero es mayor que el segundo numero");
} else if (numero1 == numero2) {
    alert("el primero y segundo numero son iguales");
} else {
    alert("el primer numero es menor que el segundo numero");
} 


numero3 = 10; 
console.log(numero3);

for (let i = 0; i < 10; i++) {
    numero3++;
    console.log(numero3);
} 
console.log(numero3);

while (numero3 > 10, numero3 < 1000) {
    numero3++;
    console.log(numero3);
}

var turno = prompt("cuando tomo su turno?");
switch (turno) {
    case "lunes": 
        alert("tiene turno reservado");
        break;
    case "martes":
        alert("tiene turno reservado para el martes");
        break;
    case "miercoles":
        alert("tiene turno reservado para el miercoles");
    default: 
        alert("su turno es invalido para la fecha elegida");
} 

*/ 

// arrays 
/*
var semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]
for (i in semana) {
    console.log(semana[i]);
}
semana[9] = "lunes";
console.log(semana);
console.log(semana.length); 

var array1 = ["tierra", "agua", "fuego", "viento", "electricidad"];
console.log(array1);
array1.shift();
console.log(array1);
array1.splice(2,1);
console.log(array1);
*/

// desafio semana 4

var supermercado = [];

var elemento1 = prompt("que es lo primero que quiere comprar?");
supermercado.push(elemento1);
var elemento2 = prompt("que es lo segundo que desea comprar?");
supermercado.push(elemento2);
var elemento3 = prompt("que es la ultima cosa que desea comprar?")
supermercado.push(elemento3);
var extra = prompt("que desea llevarse como un gustito?")
supermercado.push(extra)

console.log(supermercado);

