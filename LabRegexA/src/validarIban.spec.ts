 import { isValidIBAN } from 'ibantools';
import {validarFormato} from './validarIban';
import { limpiarIban } from './validarIban.helper';

describe("validarFormato", () => { 
  test.each([ 
     ["ES1001289282216773521582", true], 
    ["ES9521001647056318451361", true], 
    ["R09090909099090909", false], 
    ["", false], 
    ["9521001647056318451361", false], 
    ["ES95-2100-1647-056318451361", true], 
    ["ES95  2100  1647  056318451361", true], 
  ])( 
"Deberia devolver para el IBAN %s el valor %s", 
 (valor: string, expected: boolean) => { 
    let iban = limpiarIban(valor);
      expect(validarFormato(iban)).toBe(expected); 
    } 
  ); 
}); 

describe("isValidIBAN", () => { 
    test.each([ 
       ["ES1001289282216773521582", true], 
      ["ES9521001647056318451363", false], 
      ["R09090909099090909", false], 
      ["", false], 
      ["9521001647056318451361", false], 
      ["AB95-2100-1647-056318451361", false], 
      ["ES95  2100  1647  056318451361", true], 
    ])( 
  "Deberia devolver para el IBAN %s el valor %s", 
   (valor: string, expected: boolean) => { 
      let iban = limpiarIban(valor);
        expect(isValidIBAN(iban)).toBe(expected); 
      } 
    ); 
  }); 
