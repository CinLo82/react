import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-sync-await', () => {

    test('getImagen debe de retornar el url de la imagen', async() => {
        const url = await getImagen();
        console.log(url)
        expect(typeof url).toBe('string');
    })
  
})
