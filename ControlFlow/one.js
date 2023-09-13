// if statement 

// if (2 == "2"){
//   console.log ("Executed ")
// } // executed

// if (2 === "2"){
//   console.log ("Executed ")
// } // NOt executed

// NOTE : == CHEKS THE ONLY CONTENT BUT.... === CHEKS THE TYPE 



const userloggedIn = true

const debitCard = true

// if (userloggedIn && debitCard ){
//     console.log("Allowed to buy courser");
// }


// falsy vlaue : false , 0 , -0, BigInt, 0n, "", null, undefined , NaN(NOt a Number). other than this are truthy

// truthy value : "0" , "false" , " ", [] , {} , function(){}

const userArray = []

// if (userArray.length === 0){
//     console.log("Array is empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log(typeof(Object.keys(emptyObj))) // Object but object.keys.(emptyObje) returns array
    console.log("Object is empty")
}

// Nullish coalescing Operator (??): null undefined 
let val1 ; 

//val1 = 5 ?? 10 //5

//val1 = null ?? 10 // 10

//val1 = undefined ?? 15 // 15

//val1 = null ?? 10 ?? 20 // returns first value which it will get in this case 10.

//console.log (val1)

// Terniary Operator 

// Syntax : condition ? true : false

const iceTeaPrice = 65

iceTeaPrice <= 80 ? console.log ("less than 80"): console.log ("more than 80")


