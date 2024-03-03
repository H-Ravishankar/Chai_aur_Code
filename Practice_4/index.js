const express = require("express")

const jwt = require("jsonwebtoken")

const jwtPassword = "12345678"


const app = express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "harkirat@gamil.com",
        passwrod:  "123",
        name:  "Harkirat Singh"
    },
    {
        username: "raman@gmail.com",
        passwrod: "456",
        name : "Raman Singh"
    },
    {
        username: "kiran@gamil.com",
        password: "789",
        name: "Kiran Kumar"
    },
];

function userExists(username, passwrod){
     let userExists = false;
     for(let i = 0; i < ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].passwrod == passwrod){
            userExists = true;
        }
     }

     return userExists;
}


app.post("/signin",function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(403).json({
            msg: "User doesnt exist in our memory db"
        })
    }

    var token = jwt.sign({username: username},jwtPassword)
    return res.json({
        token,
    })
})

app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        res.json({
           users: ALL_USERS.filter((value)=>{
             if(value.username === username){
                return false
             }else{
                return true
             }
             
           })
        })
    }catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
})

app.listen(3000)