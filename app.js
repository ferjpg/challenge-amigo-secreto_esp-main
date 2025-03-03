// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function asignarTextoId(id,texto) {
    let idHTML = document.getElementById(id);
    idHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let escribeAmigo = document.querySelector('#amigo').value;
    if (escribeAmigo === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(escribeAmigo);
        actualizaLista();
        limpiarInput();
        
    }
}

function limpiarInput() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}

function actualizaLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No se ha insertado ningun nombre.');
    } else {
        asignarTextoId('listaAmigos', '');
        let numero = Math.floor(Math.random() * amigos.length);
        asignarTextoId('resultado', `El amigo secreto es: ${amigos[numero]}`);
    }
}