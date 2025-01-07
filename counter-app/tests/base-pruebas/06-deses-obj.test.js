import { usContext } from "../../src/base-pruebas/06-deses-obj";


describe('Prueba de 06-deses-obj', () => {

    test('usContext debe devolver un objeto ', () => {
        const expectedObject = {
            "nombreClave": "John",
            "anios": 30,
            "latlng" : {
                "lat": 14.1232,
                "lng": -12.3232
            }
        }
        const result = usContext({
            nombre: "John",
            edad: 30,
            clave: "John"
        })
           
            console.log(result)
        expect(result).toEqual(expectedObject)

     
    });

})
    
  
