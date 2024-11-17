import {validarIban} from './validarIban';

const btnValidar = document.getElementById('boton-validar');

if (btnValidar && btnValidar instanceof HTMLButtonElement) {

    btnValidar.addEventListener("click", validarIban);
}