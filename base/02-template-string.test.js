import '@testing-library/jest-dom';
import {getSaludo} from '../../base/02-template-string';



describe('Pruebas en 02-template-string.js', () => {
    
    test('prueba en el metodo getSaludo ', () => {
        
        const nombre = 'Fernando';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola '+ nombre);
    });

    //getSaludo debe de retornar Hola Carlos si no hay argumento en el nombre
    test('retorna Carlos si no le paso un parametro ', () => {
        
        const saludo = getSaludo();

        expect(saludo).toBe('Hola Carlos');
    });
    
    
});
