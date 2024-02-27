// let count = 0;
// function getcounter(){
//     ans = count+1
//     console.log(ans);
//     count = ans
    
// }

// setInterval(getcounter, 1000)

//let cout=0;
// setInterval(function(){
//     cout++;
//     console.log(cout)
// },1000)

// setTimeout(function(){
   
//     console.log(cout)
// },1000)

// setTimeout(function(){
//     console.log("Hello World");
// }, 2000);

//let count = 0;
// let timeoutId;

// function incrementCounter() {
//   count++;
//   console.log(count); // Or update an HTML element

//   // Schedule the next increment with a delay
//   setTimeout(incrementCounter, 1000); // Delay of 1 second
// }

// // Start the counter
// incrementCounter();


const fs = require ("fs")

fs.readFile("a.txt", "utf-8", function(err,data){
    console.log(data)
})

console.log("After file read")

