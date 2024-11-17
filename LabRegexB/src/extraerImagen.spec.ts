
import {validarUrl} from './extraerImagen';

describe("validarUrl", () => { 
  test.each([ 
     ["https://images.unsplash.com/photo-1586075174173-dfa659af5d97", true], 
    ["htt://images.unsplash.com/photo-1586075174173-dfa659af5d97", false], 
    ["https://picsum.photos/200", true], 
    ["", false], 
    ["http://localhost:3000/./patrona.jpg", true], 

  ])( 
  "Deberia devolver para la url %s el valor %s", 
  (valor: string, expected: boolean) => {   
      expect(validarUrl(valor)).toBe(expected); 
    } 
  ); 
}); 

