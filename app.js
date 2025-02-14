let nombresParticipantes = [];
let numeroIndice = generarIndice();
console.log(numeroIndice);
console.log(nombresParticipantes);
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); //Obtiene una referencia al elemento HTML con el ID "listaAmigos", donde se mostrarán los nombres de los participantes.
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    for (let nombre of nombresParticipantes) { //  Itera sobre el arreglo nombresParticipantes, donde cada elemento representa un nombre.
        // Para cada nombre en el arreglo:
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }
}

function añadirNombre() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
   
    if (nombres === "") {
        alert('Por favor, inserte un nombre.');
    } else {
        nombresParticipantes.push(nombres);
        limpiarCaja();
        actualizarLista(); // Actualizar la lista después de añadir un nombre
    }
}

function limpiarCaja() {
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}
function sortearAmigo() {
    let nombres = document.getElementById('amigo').value;
    console.log(nombres);
   
    if (nombres === "") {
        alert('Por favor, inserte un nombre.');
    } else {

    
    }
}

function generarIndice(){
    return Math.floor(Math.random()*10)+0;
}

