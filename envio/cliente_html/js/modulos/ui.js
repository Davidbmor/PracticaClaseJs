export const UI =  {

    drawCars : (cars , div) =>{
        cars.forEach(element => {
            div.innerHTML += `<p>${element.matricula}</p>`;
        });

    }


}