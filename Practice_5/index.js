const express = require("express")

const app = express();
// function that returns boolean 
function isOldEnough(age){
    if(age > 14){
        return true;
    }else{
        return false
    }
}


app.get("/ride",function(req, res){
    if(isOldEnough(req.query.age)){
         res.json({
            msg: "you have succesfully enter the ride"
         })
    }else{
        res.status(411).json({
            msg: "sorry you are restricted , age is not fullfeeling the criteria"
        })
    }
    
})

app.listen(3000)