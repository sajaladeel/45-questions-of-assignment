//sandwiches:

function ordersandwich(...items:string[]):void{
    if (items.length ===0){
        console.log('no items selected, your sandwich is empty.');
    }else{
        console.log('your sandwich includes:');
        for(const itemm of items){
            console.log(`-${itemm}`);
        }
    }
}



//calling function

ordersandwich('cheese sandwich','grill sandwich', 'potato sandwich');
ordersandwich('cold sandwich','chicken sandwich');
ordersandwich();