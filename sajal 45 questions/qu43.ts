// unchanged magicians:

const GmagicianNames2= ['feeela','zeeela','heeela','teeela'];
function make_greatt(names:string[]):string[]{
    return names.map((name)=>`${name} the Great`);
}

function show_magicians(names:string[]):void{
    console.log('Modified Magician Names :');
    for (const name of names ){
        console.log(name);
    }
}

const GreatmagicianNames2=make_greatt(GmagicianNames);

show_magicians(GreatmagicianNames);

// display both arrays:
console.log("Original Magician Names:");
show_magicians(GmagicianNames2);

console.log("\nModified Magician Names:");
show_magicians(GreatmagicianNames2);