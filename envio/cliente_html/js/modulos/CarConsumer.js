import { Car } from "./Car.js";

export class CarConsumer {
    static consum(datos){
        let cars=[];
        datos.forEach(element => {
            cars.push(new Car(element.marca,element.matricula,element.color,element.averia))
        });
        return cars
    }
}