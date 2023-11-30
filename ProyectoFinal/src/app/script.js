let respuestasCorrectas = 0;

function respuesta(pregunta, opcion){
    const respuestas = [1,1,1,1,1,1,1,1];
    if(respuestas[pregunta] === parseInt(opcion.value)){
        respuestasCorrectas++;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('corregir').addEventListener('click', function() {
        document.getElementById('respuesta').innerText = respuestasCorrectas;
        });
    });