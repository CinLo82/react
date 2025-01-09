import { fireEvent, render, screen } from '@testing-library/react'
import { CounterApp } from '../src/CounterApp'


describe('Pruebas en <CounterApp />', () => {
    const initialValue = 10

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
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe('100')
    })

    test('Debe de incrementar con el boton +1 ', () => {
        render ( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText(initialValue + 1)).toBeTruthy()
    })

    test('Debe de decrementar con el boton -1 ', () => {
        render ( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('-1'))
        screen.debug()
        expect(screen.getByText(initialValue - 1)).toBeTruthy()
    })

    test('Debe de colocar el valor por defecto con el btn reset ', () => {
        render ( <CounterApp value={initialValue} /> )
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        fireEvent.click(screen.getByText('-1'))
        // fireEvent.click(screen.getByText('Reset'))

        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        expect(screen.getByText(initialValue)).toBeTruthy()
    })
    
})

