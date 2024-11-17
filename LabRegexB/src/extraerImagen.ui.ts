

export const obtenerHtml = (): string => {

    const inputHtml = document.getElementById("htmlInput");
    if (inputHtml && inputHtml instanceof HTMLTextAreaElement) {

        return inputHtml.value;
    }
    return '';

}

export const pintarImagenes = async (urls: string[]): Promise<void> => {
    const contenedorUrl = document.querySelector(".container-urls");
    if (contenedorUrl && contenedorUrl instanceof HTMLDivElement) {
        contenedorUrl.innerHTML = "";
        urls.forEach((url) => {
            const divUrl = crearDivImagen(url);
            contenedorUrl.appendChild(divUrl);
        });
    }
};

export const crearDivImagen = (url: string): HTMLDivElement => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("card");

    const divImagen = document.createElement("div");
    divImagen.classList.add("card-imagen");

    const imagen = document.createElement("img");
    imagen.src = url;
    divImagen.appendChild(imagen);
    tarjeta.appendChild(divImagen);

    return tarjeta;
};




