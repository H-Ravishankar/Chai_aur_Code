const express = require("express");

const app = express();
let numberOfRequestForUser = {}
setInterval(()=>{
    numberOfRequestForUser = {}
},1000)
app.use(function(req, res, next){
  const userId = req.headers["userId"]

  if(numberOfRequestForUser[userId]){
     numberOfRequestForUser[userId] = numberOfRequestForUser[userId]+1;
     if(numberOfRequestForUser[userId] > 5){
        res.status(400).send("no Entry")
     }else{
        next()
     }
  }else{
    numberOfRequestForUser[userId]  = 1
    next()
  }
})


app.get('/user',function(req, res){
    res.status(200).json({name: "jhon"})
})

app.post('/user',function(req, res){
    res.status(200).json({msg: "User is Created"})
})

app.listen(3000)