// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function asignarTextoId(id,texto) {
    let idHTML = document.getElementById(id);
    idHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let escribeAmigo = document.querySelector('input').value;
    console.log(escribeAmigo);
    if (escribeAmigo === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        asignarTextoId('listaAmigos', escribeAmigo);
        return;
    }  
}