//albums: 
function make_album(
    artist:string,
    title:string,
    tracks?:number
):
Record<string,unknown>{
    const album:Record<string,
    unknown>={
        artist,
        title
    };
    if (tracks !==undefined){
        album.tracks = tracks;
    }
    return album;
}


const album1 = make_album('isnt it lovely','B.E',67);
const album2= make_album('lalalaalla','heina',);
const album3 = make_album('cold play','dreamy',12);


console.log("album1:",album1);
console.log("album2:",album2);
console.log("album3:",album3);
