import { getPatronExtraerSrc, getPatronValidacionUrl } from "./extraerImagen.helper";
import { obtenerHtml, pintarImagenes } from "./extraerImagen.ui";

const obtenerUrlImagen = (html: string): string[] => {
    const urls: string[] = [];
    const coincidencias = [...html.matchAll(getPatronExtraerSrc())];
    coincidencias.forEach(img => urls.push(img[1]));
    return urls;
};

export const validarUrl = (url: string): Boolean => {
    return getPatronValidacionUrl().test(url);
}

export const extraerImagenes = () => {
    const html = obtenerHtml();
    const urlsImagen = html ? obtenerUrlImagen(html) : ["No se ha encontrado ninguna imagen"];

    urlsImagen.forEach((url, index) => {
        if (!validarUrl(url)) {
            urlsImagen.splice(index, 1);
        }
    });
    pintarImagenes(urlsImagen);

};

