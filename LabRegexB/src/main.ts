import {extraerImagenes} from './extraerImagen';

const btnValidar = document.getElementById('boton-extraer');

if (btnValidar && btnValidar instanceof HTMLButtonElement) {

    btnValidar.addEventListener("click", extraerImagenes);
}