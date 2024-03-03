const express = require("express")
const jwt = require("jsonwebtoken")
const jwtPassword = "12345678"


const app = express()
app.use(express.json())

const ALL_USERS = [
    {
        username : "harkirat@gmail.com",
        password: "123",
        name: "harkirat sigh"
    },
    {
        username : "ramn@gmail.com",
        password: "123",
        name: "Raman Singh"
    },
    {
        username: "priya@gmail.com",
        password: "123321",
        name: "Priya kumari"
    }
]

function userExits(username, password){
   let userExits = false;

//    ALL_USERS.forEach(element => {
//      if(element.username == username && element.password == password){
//          userExits = true;
//          console.log(username)
//      }
//      return userExits;
//    });
     for(let i = 0; i < ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            console.log(userExits)
            userExits = true;
            
        }
     }
     console.log(userExits)
     return userExits
}
app.post("/singin",function(req, res){
    const username = req.body.username;
    const password = req.body.password
    console.log(req.body.username)

    if(!userExits(username, password)){
        return res.status(403).json({
            msg: "User doesnt exits in our memory db"
        })
    }

    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    })
})

// app.get("/users",function(req, res){
//     const token = req.headers.authorization
//     try{
//         const decoded = jwt.verify(token, jwtPassword)
//         const username = decoded.username;
//     }catch(err){
//         return res.status(403).json({
//             msg: "Invalid token"
//         })
//     }

// })

app.listen(3001)