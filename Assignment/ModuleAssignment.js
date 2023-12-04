//Values and Datatypes
// Create a jaascript file, using jaascript comments, List all the datatypes of Jaascript, and specify and example for each of them.



/*
String : "Hello, Good Morning"

Number : 

Integer: 5, 
Floating value: 5.1 , 

Not a Number : NaN

BigInt : 1024n

Boolean : true, false

undefined : undefined 

Null : null 

Objects : 

Array : [1, 2 ,'rrr']
Object : {Name: "Hey There", Course: "web Developement"}

*/

//2. Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.

[
    'iphone',
    'macbook pro',
    'flower pot',
    'Book',
    'TV',
    'watch',
    'Ball',
    'Bat',
    'lens',
    'keyboard'

]

//Create an object of a student registry of 5 students whose key is the registration number and the value is the student name. Registration number starts from 1 and continues.


let Names = {
    1: "Ram",
    2: "Shyam", 
    3: "Max", 
    4: "Danny",
    5: "David"
}


//Variables and typeof

//1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of value stored.


// let var1 = "hey hello "
// console.log(typeof var1)

// let var2 = 9
// console.log(typeof var2)

// let var3 = 10.2
// console.log(typeof var3)

// let var4 = Number.POSITIVE_INFINITY
// console.log(typeof var4);

// let var5 = NaN
// console.log(typeof var5);

// let var6 = 1024n
// console.log(typeof var6);

// let var7 = Boolean
// console.log(typeof var7);

// let var8 = undefined
// console.log(typeof var8);

// let var9 = null 
// console.log(typeof var9);

// let var10 = Symbol("Web")
// console.log(typeof var10)

// let var11 = [1,3,4]
// console.log(typeof var11);

// let var12 = {
//     Name: "Ram",
//     Age: 25
// }
// console.log(typeof var12)


//2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and error messages.

// valid variable 

//let name "Max"
//console.log(name)

//let age = 15
//console.log(age)

//Invalid variable

// let 1name = "max"
// console.log(1name)


//Operators

//Write a program that prints the multiplication table in the textbook format of any number specified.

// let number = 5

// console.log(`${number} * 1 = ${number * 1}`)
// console.log(`${number} * 2 = ${number * 2}`)
// console.log(`${number} * 3 = ${number * 3}`)
// console.log(`${number} * 4 = ${number * 4}`)
// console.log(`${number} * 5 = ${number * 5}`)
// console.log(`${number} * 6 = ${number * 6}`)
// console.log(`${number} * 7 = ${number * 7}`)
// console.log(`${number} * 8 = ${number * 8}`)
// console.log(`${number} * 9 = ${number * 9}`)
// console.log(`${number} * 10 = ${number * 10}`)


//2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

// let num1 = 10 
// let num2 = 20

// console.log(`The Addition of num1 and num2 is ${num1}+${num2}`);

// console.log(`The Substraction of num1 and num2 is ${num1}-${num2}`);

// console.log(`The Multiplication of num1 and num2 is ${num1}*${num2}`);

// console.log(`The Division of num1 and num2 is ${num1}/${num2}`);



//3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

// let length = 10;
// let width = 5;

// let perimeterOfRectangle = 2 * (length + width)

// console.log(`The perimeter of the rectangle with length : ${length} and width ${width} is ${perimeterOfRectangle}`);


//Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified.


// let num1 = 12
// let num2 = 12

// console.log(num1 == num2);

// let num3 = 12
// let num4 = 15

//console.log(num3 == num4);


// let num3 = 12
// let num4 = 15

// console.log(num3 != num4);

// let num3 = 12
// let num4 = "12"

// console.log(num3 === num4);

// let num3 = 12
// let num4 = "12"

// console.log(num3 !== num4);

// let num3 = 12
// let num4 = 15

// console.log(num3 > num4);

// let num3 = 12
// let num4 = 15

// console.log(num3 < num4);

// let num3 = 12
// let num4 = 12

// console.log(num3 <= num4);

// let num3 = 12
// let num4 = 12

// console.log(num3 >= num4);




//What are Conditions, If, If-else, if-else-if

//Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.

/*
let trafficLight = "orange"

if(trafficLight == "red"){
    console.log("stop")
}else if (trafficLight == "Orange"){
    console.log("Be Ready")
}else if(trafficLight == "green"){
    console.log("Goo")
}
*/

// Write a program to print the largest of 2 numbers.

/*
let num1 = 20
let num2 = 12

if(num1 > num2){
    console.log("num1 is greater than num2")
}else {
    console.log("num2 is greater than num1")
}
*/

//3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

/*
let num = 5

if(num % 5 === 0 && num % 3 == 0){
    console.log("fizzBuzz")
}else if(num % 3 == 0){
    console.log("fizz")
}else if(num % 5 == 0){
    console.log("Buzz")
}else{
    console.log("Invalid")
}

*/


// Ternary Conditions

//Write a program that takes in a number and outputs whether it is positive, negative, or zero.

/*
let number = 0;
number == 0 ? console.log("the number is Zero"):number > 0 ? console.log("The number is greater than zero"): console.log("The number is Lesser than zero")
*/


//Create a program that takes in two numbers and prints the larger one.



/*
let num1 = 10
let num2 = 10

num1 == num2 ? console.log("Both are equal ") : num1 > num2 ? console.log(`The larger number among the two number is ${num1}`): console.log(`The larger number among the two numbers is ${num2}`)
*/


//Loops

//Write a program that generates the multiplication table in the textbook format for a given number.

//let number = 5

// for (let i = 1; i <= 10; i++){
//    console.log(`${number} * ${i} = ${number * i}`)
// }


//Write a program that prints all the positive even numbers till the number specified.

// let number = 10

// for(let i = 1; i <= number ; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }






