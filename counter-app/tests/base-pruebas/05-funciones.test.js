import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";


describe('Pruebas en 05-funciones', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const result = getUser()

        console.log(result)
        expect(result).toEqual(testUser)
    });

    test('getUsuarioActivo debe retornar un objeto', () => {
        const name = "Cinlo";
        const user = {
            uid: 'ABC567',
            username: name
        };
        console.log(user)

        const result = getUsuarioActivo(name)
        expect(result).toEqual(user)
    });

})
