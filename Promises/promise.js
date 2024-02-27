// const promiseOne = new Promise(function(resolve, reject){
//     // do an async tasks
//     // db calls, cryptography, network

// const { log } = require("console");
// const { response } = require("express");

//     setTimeout(function(){
//         console.log("Async task is complete");
//         resolve()
//     },1000)
// })

// promiseOne.then(function(){
//     console.log ("Promise consume")
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Ravishankar')
//         resolve()
//     },2000)
// })
// .then(function(){
//     console.log("promise consume");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       resolve({userName: "chai", email: "chai@example.com"})
//     },1000)
// })
// promiseThree.then(function(user){
//         console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
// setTimeout(function(){
//     let error = true
//     if(!error){
//         resolve({userName:"Ravishankar", password: "123"})
//     }else{
//         reject('Error: something went wrong')
//     }
// },1000)
// })
// promiseFour
// .then((user)=>{
//     console.log(user)
//     return user.userName
// })
// .then((userName)=>{
//    console.log(userName)
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>console.log('promise is either resolved or rejected'))

// const promiseFive = new Promise(function(resolve, reject){
//        setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({username: "javascript", password: "123"})
//         }else{
//             reject("Error: js went wrong")
//         }
//        },1000)
// })
// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//     console.log(response)
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// async function getAllUser(){
//    try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
    
//     console.log(data)
  
// } catch (error) {
//     console.log(error);
//    }

    
// }
// getAllUser()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json()
// }).then((data)=>{
//       console.log(data)
// })
// .catch((error)=>{
//     console.log(error);
// })

// const promiseOne = new Promise(function(resolve,reject){
//     //db calls, crypto, network
//     setTimeout(() => {
//         console.log("Promise consumed")
//         resolve()
//     }, 1000);
// })

// promiseOne.then(()=>{
//     console.log("then called");
// })

// const PromiseTwo = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve({username: "abc", password: "123"})
//     }, 1000);
// })
// PromiseTwo.then((user)=>{
//     console.log(user)
// })

// const PromiseThree = new Promise((resolve, reject)=>{
//       let error = false;
//       if(!error){
//         resolve({username: "ram", password: "abc"})
//       }else{
//           reject("Error")
//       }
// })
// PromiseThree.then((User)=>{
//         console.log(User)
//         return(User.username)
// }).then((username)=>{
//     console.log(username)
// })
// .catch((err)=>{
//     console.log(err)
// })


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json() 
    
})
.then((data)=>{
      console.log(data)
})
.catch((error)=>{
    console.log(error)
})






