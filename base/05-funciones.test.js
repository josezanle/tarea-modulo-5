import '@testing-library/jest-dom';
import {getUser, getUsuarioActivo} from '../../base/05-funciones';


describe('Pruebas en 05-funciones.js', () => {
    
    test('getUser debe de retornar un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        //para comparar objetos debe ser toEqual
        expect(user).toEqual( userTest);
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        
        const nombre = 'Jorge';
        
        const usuarioActivoTest = {
            uid: 'ABC567',
            username: nombre
        }

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual(usuarioActivoTest);
    })
    
    
})
