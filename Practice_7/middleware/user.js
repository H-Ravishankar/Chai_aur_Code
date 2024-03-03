const {User} = require("../db")
function userMiddleware(req, res, next){
    const username = req.headers.username
    const passwrord = req.headers.passwrord

    User.findOne({
        username : username,
        password: passwrord
    }).then(function(value){
        if(value){
            next()
        }else{
            res.status(403).json({
                msg: "User Doesnt Exits....."
            })
        }
    })

}
module.exports = userMiddleware;