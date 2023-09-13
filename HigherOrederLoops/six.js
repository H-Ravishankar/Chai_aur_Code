// reduce 

const myNumbers = [ 1, 2, 3 ]

// const myTotal = myNumbers.reduce( function (acc, currValue) {
//     console.log (`acc: ${acc} and currval: ${currValue}`)
//     return acc + currValue 
// }, 0)


const myTotal = myNumbers.reduce( (acc, currValue)=> acc + currValue,0)

//console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js course ',
        price : 2999
    },
    {
        itemName : 'java course ',
        price : 4999
    },
    {
        itemName : 'python course ',
        price : 3999
    },
    {
        itemName : 'mobile course ',
        price : 5999
    },
    
]

const priceToPay = shoppingCart.reduce ( (acc,item) => acc + item.price,0)

console.log (priceToPay)