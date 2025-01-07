import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp.test.js', () => {
    
    test('getHeroeById debe de retorna un heroe por ID', () => {
        const id = 1
        const hero = getHeroeById(id);
        console.log(hero)

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    })

    test('getHeroeById debe de retorna undefined si el heroe no existe', () => {
        const id = 100
        const hero = getHeroeById(id);
        
        expect(hero).toBe(undefined)
        // o
        expect(hero).toBeFalsy()
    })

    test('Solo debe retornar heroes de DC', () => {
        const owner = 'DC'
        const heroes = getHeroesByOwner(owner)
        console.log(heroes)

        expect(heroes).toHaveLength(3)
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ])
    })

    test('Solo debe retornar heroes de Marvel', () => {
        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner)
        console.log(heroes)

        expect(heroes).toHaveLength(2)
        expect(heroes).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ])
    })
    
})
