import '@testing-library/jest-dom';
import {getHeroeById, getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('test 08-imp-exp.js', () => {
    
    test('debe retornar un heroe por ID', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id);

        expect(heroe).toEqual(heroeData);
    });

    test('debe retornar un undefined si el heroe no existe', () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('debe de retornar un arreglo con los heroes de DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroeOwner = heroes.filter( h => h.owner === owner);

        expect(heroe).toEqual(heroeOwner);
    });

    test('debe de retornar un arreglo con los heroes de Marvel', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        expect(heroe.length).toBe(2);
    });
    
})
