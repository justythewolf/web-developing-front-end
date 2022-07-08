var lista = document.querySelector('ul');
var nuevoLi = document.createElement('li');
var li = document.querySelector('li:nth-child(x)');
nuevoLi.textContent = "item 3";
lista.appendChild(nuevoLi);
var parentDeTitulo = document.querySelector('h1').parentNode;
console.log(parentDeTitulo);
function cambiar() {
    var tituloACambiar = document.querySelector('.titulos');
    tituloACambiar.removeAttribute('class', "titulos");
    tituloACambiar.setAttribute('class', "titulos2");
}
function cambiar2() {
    var tituloACambiar2 = document.querySelector('.titulos2');
    tituloACambiar2.removeAttribute('class', "titulos2");
    tituloACambiar2.setAttribute('class', "titulos");
}
function borrar() {
    nuevaLista = lista.removeChild(document.querySelector("li:nth-child(1)"));
}
function deshacer() {
    nuevaLista = lista.appendChild(li);
}
/*
var elemento = document.querySelector("button");
elemento.addEventListener("dblclick", mostrarInfo);

function mostrarInfo() {
    elemento2 = document.querySelector("#descripcion")
    elemento2.setAttribute("class", ".mostrar");
}
*/