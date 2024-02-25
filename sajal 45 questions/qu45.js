"use strict";
// cars:
function makeCar(manufacturer, model, color, optionalFeature) {
    const CarInfo = {
        manufacturer,
        model,
        color: color || 'unknown color',
        optionalFeature: optionalFeature || "no optional feature",
    };
    return CarInfo;
}
const myCARR = makeCar('rangeRover', 'john', 'black', 'power assisted doors');
console.log(myCARR);
