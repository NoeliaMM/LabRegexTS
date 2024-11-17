import {bancos} from './model';

export const obtenerNombreBanco = (codigo: string): string | null => {
    const banco = bancos.find(b => b.codigo === codigo);
    return banco ? banco.nombre : null;
}

export const limpiarIban = (iban :string):string =>{
    return iban.replace(/[\s-]/g, "");
}

export const getPatronValidacion = (): RegExp =>{
    return /^(?<codPais>[a-zA-Z]{2})(?<dC1>\d{2})(?<codBanco>\d{4})(?<codSucursal>\d{4})(?<dC2>\d{2})(?<numCuenta>\d{10})$/m;
}