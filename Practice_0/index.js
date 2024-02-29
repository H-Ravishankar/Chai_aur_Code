const express = require("express")

const app = express();

const users = [{
    name: "jhon",
    kidneys: [{
        healthy: false
    }]
}]

app.get("/", function(req, res){
    
    const jhonKidneys = users[0].kidneys
    console.log(jhonKidneys)
    const numberOfKidneys = jhonKidneys.length;
    let numberOfHealthyKidneys = jhonKidneys.filter((kidney)=>kidney.healthy === false)
    // for(let i =0; i< jhonKidneys.length; i++){
    //     if(jhonKidneys[i].healthy){
    //         numberOfHealthyKidneys = numberOfHealthyKidneys+1
    //     }
    // }
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys
    })
})

app.post("/", function(req, res){

})

app.listen(3001)