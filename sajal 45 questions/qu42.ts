//Great Magicians: 

const GmagicianNames= ['feeela','zeeela','heeela','teeela'];
function make_great(names:string[]):string[]{
    return names.map((name)=>`${name} the Great`);
}

function show_magicianss(names:string[]):void{
    console.log('Modified Magician Names :');
    for (const name of names ){
        console.log(name);
    }
}

const GreatmagicianNames=make_great(GmagicianNames);

show_magicianss(GreatmagicianNames);