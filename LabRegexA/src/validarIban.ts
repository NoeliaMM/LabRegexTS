import { isValidIBAN } from 'ibantools';
import { getPatronValidacion, obtenerNombreBanco } from './validarIban.helper';
import { obtenerIban, pintarMensaje } from './validarIban.ui';

export const validarFormato = (iban: string): Boolean => {
  
    return getPatronValidacion().test(iban);
}

export const extraerInfoIban = (iban: string): { [key: string]: string } | null => {
    return getPatronValidacion().exec(iban)?.groups as { [key: string]: string } | null;
};


export const validarIban = () => {
    let mensaje: string[] = [];
    const iban = obtenerIban();
    if (iban) {
        const estaBienFormado = validarFormato(iban);
        mensaje.push(`El IBAN ${estaBienFormado ? '' : 'NO'} está bien formado`);

        if(estaBienFormado){
            const esValido = isValidIBAN(iban);
            mensaje.push(`El IBAN ${esValido ? '' : 'NO'} es válido`);
    
            if (esValido) {
                const ibanInfo = extraerInfoIban(iban);
                if (ibanInfo) {
                    const { codBanco, codSucursal, dC2, numCuenta } = ibanInfo;
                    const nombreBanco = obtenerNombreBanco(codBanco);
                    mensaje.push(nombreBanco ? `Banco: ${nombreBanco}` : 'Código de banco no encontrado.');
                    mensaje.push(`Código sucursal: ${codSucursal}`);
                    mensaje.push(`Código de control: ${dC2}`);
                    mensaje.push(`Número de cuenta: ${numCuenta}`);
                }
            }
        }
    }else{
        mensaje.push("Introduce un IBAN");
    }
    pintarMensaje(mensaje);
}





