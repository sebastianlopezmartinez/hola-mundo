let contador = 0;

const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("boton");
const interacciones = document.getElementById("contador");

boton.addEventListener("click", function() {

    contador++;

    mensaje.textContent = "¡Excelente! JavaScript está funcionando.";

    boton.textContent = "¡Ya comenzaste!";

    interacciones.textContent = "Clics realizados: " + contador;

});
