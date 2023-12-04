// var obj = {
//     name:  "vivek",
//     getName: function(){
//     console.log(this.name);
//   }
     
// }
// // obj.getName()
       
// var getName = obj.getName();
// console.log(getName)

       
// var obj2 = {name:"akshay", getName };
// obj2.getName();


// var obj1 = {
//     address: "Mumbai,India",
//     getAddress: function(){
//         console.log(this.address)
//     }
// }
// let getAddress = obj1.getAddress();
// // var obj2 =  {name: "akshay", address: "klsail"}
// // let name = obj2.name


let hero = {
    powerLevel: 99,
    getPower(){
      return console.log(this.powerLevel);
    }
  }
  
  let getPower = hero.getPower;
  
  let hero2 = {powerLevel:42};
  console.log(hero.getPower);
  console.log(getPower.apply(hero2));
  
