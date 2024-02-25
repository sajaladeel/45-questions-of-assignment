// cars:

function makeCar(manufacturer:string,
    model:string,
    color?:string,
    optionalFeature?:string):
    Record<string,string>{
        const CarInfo:Record<string,
        string> ={
            manufacturer,
            model,
            color: color|| 'unknown color',
            optionalFeature: optionalFeature || "no optional feature",

        };
        return CarInfo
    }


    const myCARR = makeCar('rangeRover',
    'john','black','power assisted doors');
    console.log(myCARR);