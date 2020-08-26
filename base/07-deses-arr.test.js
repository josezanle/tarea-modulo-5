import '@testing-library/jest-dom';
import {retornaArreglo} from '../../base/07-deses-arr';

describe('Prueba en 07-deses-arr.js', () => {
    
    test('retornaArreglo debe retornar un arreglo', () => {
        
        const [letra, numeros ] = retornaArreglo();

        expect(letra).toBe('ABC');
        expect(typeof letra).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');

    })
    
})

