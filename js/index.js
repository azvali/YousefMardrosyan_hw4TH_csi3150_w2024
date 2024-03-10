
import { usedCars } from "./usedCars.js";
const displayBox = document.querySelector('.cars');
const minYear = 0;
const maxYear = 9999;
const makeChosen = "All";
const minPrice = 0;
const maxPrice = 999999999;
const colorChosen = "All";

let filters = false;
if(filters == false){
    loadAll(minYear, maxYear, makeChosen, minPrice, maxPrice, colorChosen);
}


document.getElementById("submitButton").addEventListener("click", function(event){
    event.preventDefault();
    filters = true;

    displayBox.innerHTML = '';

    const minYear = document.getElementById("minYear").value || 0;
    const maxYear = document.getElementById("maxYear").value || 9999;
    const makeChosen = document.getElementById("make").value;
    const minPrice = document.getElementById("minPrice").value || 0;
    const maxPrice = document.getElementById("maxPrice").value || 999999999;
    const colorChosen = document.getElementById("color").value;

    loadAll(minYear, maxYear, makeChosen, minPrice, maxPrice, colorChosen);


    if(displayBox.innerHTML == ''){
        const newdiv = document.createElement('div2');
        newdiv.innerHTML = '<h1>No Cars Found</h1>'
        newdiv.style.width = '100vw';
        newdiv.style.fontSize = "50px";
        newdiv.style.display = "flex";
        newdiv.style.justifyContent = "center";
        newdiv.style.alignItems = "center";
        displayBox.appendChild(newdiv);

    }
});

function loadAll(minYear, maxYear, makeChosen, minPrice, maxPrice, colorChosen){
    for(let i = 0; i < usedCars.length; i++){

        const car = usedCars[i];


        const year = car.year;
        const make = car.make;
        const model = car.model;
        const mileage = car.mileage;
        const price = car.price;
        const color = car.color;
        const gasMileage = car.gasMileage;

        if(year < minYear || year > maxYear) continue;
        if(makeChosen !== "All" && make !== makeChosen) continue;
        if(price < minPrice || price > maxPrice) continue;
        if(colorChosen !== "All" && color !== colorChosen) continue;
        


        const newdiv = document.createElement('div');
        newdiv.className = 'div'


        newdiv.innerHTML = `
        <p id="makeModel"> ${make} ${model} </p> 
        <img src="assets/img/${model}.png" alt="${model}">
        <p id="carInfo"><span>Year:</span> ${year}</p>
        <p id="carInfo"><span>Mileage:</span> ${mileage}</p>
        <p id="carInfo"><span>Price:</span> ${price}</p>
        <p id="carInfo"><span>Color:</span> ${color}</p>
        <p id="carInfo"><span>GasMileage:</span> ${gasMileage}</p>
        `;

        displayBox.appendChild(newdiv);
    }
}