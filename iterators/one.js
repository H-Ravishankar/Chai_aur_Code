// let sum = 0;
// for(let i = 0; i <= 10 ; i++){

//     sum = sum + i;
    
//     console.log (`The sum of first ${i} numbes is ${sum}`)

// }

// for (let i = 0; i <= 10; i++){
//     const element = i
//     if (element == 5){
//         console.log ("5 is the best number ")
//     }
//     console.log(element)
// }

// for (let i = 0; i <=  10; i++){
//     console.log(`Outer loop : ${i}`);
//     for (let j = 0; j <= 10 ; j++){
//         console.log(`Inner loop : ${j} and Outer: loop ${i}`);
//     }
// }

// for (let i = 0; i <=  10; i++){
//     console.log(`Table of  : ${i}`);
//     for (let j = 0; j <= 10 ; j++){
//         console.log (i + '*' + j + ' = '+ i*j)
//     }
// }

// break And continue

// for (let i = 0; i <= 20; i++){
//     if (i == 5 ){
//         console.log(`Detected 5 `);
//         break;
//     }
//     console.log(`value of i is ${i}`);
// }

for (let i = 0; i <= 20; i++){
    if (i == 5 ){
        console.log(`Detected 5 `);
        continue;
    }
    console.log(`value of i is ${i}`);
}