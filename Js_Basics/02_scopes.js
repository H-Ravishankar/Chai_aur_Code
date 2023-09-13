// In the nested scopes child functions can access 
//parent functions variables but parent cant access child veriable

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username)
    }
  //  console.log(website) // ERROR

   // two() // hitesh
}
//one()

if(true){
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtebe"

      //  console.log (username + website)
    }
    //console.log(website);
}
//console.log (username)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5)) // working fine 
function addone(num){
    return num + 1
}



addTwo(5) // Error for this syntax. addTwo(5) //  Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}

