// function loginUserMessage(username){
//     if(username === undefined){
//         console.log ("please enter a username")
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginUserMessage())

// Diff syntax of if 

// function loginUserMessage(username){
//     if(!username){
//         console.log ("please enter a username")
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginUserMessage())

// we can give default values to the parameters.

// function loginUserMessage(username = "User"){
//     if(!username){
//         console.log ("please enter a username")
//         return
//     }
//     return`${username} just logged in`
// }
// console.log(loginUserMessage())

//  REST and Spread Operator(shopping cart)

// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,300)) // op [ 200, 400, 300 ]


// function calculateCartPrice(val1, val2, ...num1){
//     return num1
// }
// console.log(calculateCartPrice(200,400,300))//[ 300 ] 200 ---> val1 , 300--->val2

//OBJECTS PASSING IN THE FUNCTION

const user = {
    username: "Ram",
    price: 199
}

function handleObject (anyObject){
    console.log(`User Name is ${anyObject.username} and price is ${anyObject.price}`)

}
//handleObject(user)
handleObject({
    username:"max",
    price:500

})

// PASSING ARRAY TO THE FUNCTION

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));