let nombresParticipantes = [];
console.log(nombresParticipantes);
function añadirNombre(){
    let nombres = document.getElementById('amigo').value;
    console.log (nombres);
   
    if (nombres == 0) {
    alert('Por favor, inserte un nombre.');
   }
   else{
    let nuevo = nombresParticipantes.push (nombres);
   limpiarCaja();
}
   return;
}

function limpiarCaja(){
    let valorCaja = document.getElementById('amigo');
    valorCaja.value = '';
}
function listaNombres(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "${nombres}";


}