import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimerApp';
import { shallow } from 'enzyme';



describe('PrimeraApp.js test', () => {
    

    // test('debe mostrar el mensaje Hol soy Goku ', () => {
        
    //     const saludo = 'Hola soy Goku';

    //     const {getByText} = render( <PrimeraApp saludo={saludo}/> );

    //     expect( getByText(saludo)).toBeInTheDocument();
    // });
    
    test('debe de mostrar <PrimeraApp /> correctamente ', () => {
        
        const saludo = 'Hola soy Goku';
        //me muestra error pero funciona bien
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect (wrapper).toMatchSnapshot();


    });

    test('debe de mostrar el subtitulo', () => {
        const saludo = 'Hola soy Goku';
        const subtitulos = 'Soy un subtitulo';

        //me muestra error pero funciona bien
        const wrapper = shallow(    <PrimeraApp
                                        saludo={saludo}
                                        subtitulos={subtitulos}
                                    /> );
                                    
    
        const textoParrafo = wrapper.find('p').text();

        expect(textoParrafo).toBe(subtitulos);

    });
    
     

});
