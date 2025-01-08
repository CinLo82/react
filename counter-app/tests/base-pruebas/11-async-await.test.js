import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-sync-await', () => {

    test('getImagen debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        console.log(url)
        expect(typeof url).toBe('string');
    })
  
    // en caso de no encontrar la url
    test('getImagen debe de retornar un error', async() => {
        const url = await getImagen();
        expect(url).toBe('No se encontro la imagen');
    })
})
