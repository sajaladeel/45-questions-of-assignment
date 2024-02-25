"use strict";
//Large Shirts:
function make_shirt(size = "Large", message = "self obsessed") {
    console.log(`shirt size:${size.toUpperCase()}`);
    console.log(`message printed on the shirt :'${message}'`);
}
make_shirt();
make_shirt('medium');
