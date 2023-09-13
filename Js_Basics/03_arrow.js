const user = {
    username : "hitesh",
    price : 999,

    welcomeMessage : function() {
        console.log (`${this.username}, Welcome to website `)
        console.log(this); // current object reference
    }
    
}

// user.welcomeMessage()
// user.username = "Ravishankar"
// user.welcomeMessage()


//console.log (this) // op  {}

//NOTE : Globla object inside browser is window so inside browser this gives window


// function chai(){
//     let username = "Ravishankar"
//     console.log(this.username); // op undefined
// }

// chai()

// Note : can't use this inside function.



// const chai = function(){
//     let username = "Ravishankar"
//     console.log(this.username); // op undefined
// }

// chai()


const chai = () => {
    let username = "Ravishankar"
    console.log(this.username); // op undefined 
}

//chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(3,4))


// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

//console.log(addTwo(5,5));

// Object passing through arrow function
const addTwo = (num1, num2 ) => ({username: "Ravishankar"})

console.log(addTwo());


// const myArray = [2,4,5,6,4,5];

// myArray.forEach(() => {})
