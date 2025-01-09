import { getAllByAltText, render } from "@testing-library/react" 
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
  
    /*
    test('debe hacer match con el snapshot', () => {

            const title = 'Hola, soy Goku';
            render( <FirstApp title={title} /> )
            const { container } = render( <FirstApp title={title} /> );
            expect( container ).toMatchSnapshot()
        })
    */
   

    test('debe de mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Goku';
        const { container, getByText, getByTestId } = render( <FirstApp title={title} /> );

        expect( getByText(title) ).toBeTruthy()

        // const h1 = container.querySelector('h1');
        // expect(h1.innerHTML).toContain(title) // Contiene el texto

        // expect( getByTestId('test-title') ).toBeTruthy() // si existe
        expect( getByTestId('test-title').innerHTML ).toContain(title) 
    })

    test('debe de mostrar el subtitulo enviado por props', () => {
        const title = 'Hola, soy Goku';
        const subtitle = 'Soy un subtitulo';
        const { container, getByText, getAllByText } = render( 
            <FirstApp 
                title={title} 
                subtitle={subtitle} 
            /> 
        );

        expect( getByText(subtitle) ).toBeTruthy() 
        // getByText es una funcion que busca un texto en el componente
        // getAllByText es una funcion que busca (mas de una vez) los textos en el componente, regresa un arreglo

        //expect(getAllByText(subtitle).length).toBe(2)
    })
})
