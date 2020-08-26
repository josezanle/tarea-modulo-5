import '@testing-library/jest-dom';
import {getImagen} from '../../base/11-async-await';

describe('11-async-await.js test', () => {
    

    test('getImagen debe retornar el url de la imagen ', async() => {
        
        const url = await getImagen();

        expect(typeof url).toBe('string');
    });
    
});
