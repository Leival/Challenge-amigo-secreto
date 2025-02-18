let nombresParticipantes = [];
function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); //Obtiene una referencia al elemento HTML con el ID "listaAmigos", donde se mostrarán los nombres de los participantes.
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    for (let nombre of nombresParticipantes) { //  Itera sobre el arreglo nombresParticipantes, donde cada elemento representa un nombre.
        // Para cada nombre en el arreglo:
        let li = document.createElement("li"); // variableque permite generar un elemento li
        li.textContent = nombre; //asigna que elcontenido del li es lo que encuentre dentro de el elemento nombre
        lista.appendChild(li); // asigna que el elemento li esta dentro de el elemento lista
    }
}

function añadirNombre() {
    let nombres =(document.getElementById('amigo').value);
    if (nombres === "") {
        alert('Por favor, inserte un nombre.');
    } 
    else {
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
    if (nombresParticipantes.length === 0) {
        alert('Por favor, inserte un nombre.');
    } else {
        
        let indiceParticipantes= nombresParticipantes.length;
        let num = Math.floor(Math.random()*(indiceParticipantes - 0))+0;
        let nombreSecreto = nombresParticipantes[num];
        let ganador= document.getElementById("resultado");
    
     }
}

