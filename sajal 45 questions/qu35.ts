//Animals:
const animalz:string[]=["dolphin","bat","kangaroo"];

console.log('animals with a common characteristic:');

for (const animal of animalz){
    console.log(animal)
}

console.log('why these animals are unique')
for (const animal of animalz){
    switch(animal){
        case "bat":
            console.log(`a ${animal} hangs upside down.`);
            break;
            case "kangaroo":
                console.log(`a ${animal} kangroo has a special pocket for keepin babies in it.`);
                break;
                case  "dolphin":
                    console.log(`a ${animal} is a gentle animal with humans and swims very swiftly.`);
                    default:
                        console.log('any of these pets if kept in a zoo would sound unique and great.');
    }
}

console.log(' all os these animals are warm blooded.');