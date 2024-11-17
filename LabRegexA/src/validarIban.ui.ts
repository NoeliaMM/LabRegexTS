

import { limpiarIban } from './validarIban.helper';

export const obtenerIban = (): string | void => {

    const inputIban = document.getElementById("ibanInput");
    if (inputIban && inputIban instanceof HTMLInputElement) {

        return limpiarIban(inputIban.value);
    }
    else {
        console.log("No se ha encontrado el elemento input.");
    }

}
export const pintarMensaje = (mensaje: string[]): void => {

    const elementoMensaje = document.getElementById("mensaje");
    if (elementoMensaje && elementoMensaje instanceof HTMLElement) {

        elementoMensaje.innerHTML = '';

        const parrafo = document.createElement('p');

        mensaje.forEach(value => parrafo.innerHTML += value + "<br>");

        elementoMensaje.append(parrafo);
    }
}





