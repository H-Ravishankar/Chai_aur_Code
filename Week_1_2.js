console.log(`Hey good morning Ram`)

const gender = "male" 
if(gender == "male")
console.log("Good Evening")
else(console.log("good morning"))


let firstname = "Ram"
let age = 18 
console.log(`hey hii ${firstname} having age ${age}`)


let array = [20,22,35,54,44,67]

for(i=0; i< array.length; i++)
{
    if(array[i] % 2 == 0)
    {console.log(array[i])}
    else{console.log("Odd")}
}

let Peoples = [
    {
        name: "shyam",
        age: 18,
        gender: "male"
    },
    {
        name: "seetha",
        age: 18,
        gender: "female"
    },
    {
        name: "ashok",
        age: 18,
        gender: "male"
    }
]

for(i=0; i<Peoples.length; i++){
    if(Peoples[i]["gender"] == "male")
    console.log(Peoples[i]["name"])
}