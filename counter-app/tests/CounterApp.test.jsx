import { render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe('Pruebas en <CounterApp />', () => {

    test('Debe hacer match con snapshot', () => {
        const { container } = render( <CounterApp /> )
        expect(container).toMatchSnapshot()
    })
    
    test('Debe mostrar el valor por defecto de 100', () => {
        // const { container } = render( <CounterApp value={100} /> )
        // const h2 = container.querySelector('h2');
        // expect(h2.textContent).toBe('100');

        render ( <CounterApp value={100} /> )
        expect(screen.getByText('100')).toBeTruthy()
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('100')
    })


})

