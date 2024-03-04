const {Router} = require("express")
const adminMiddleware = require ("../middleware/admin")
const router = Router()
const {Admin, Course} = require('../db/index')

router.post("/signup", function(req, res){
    const username = req.body.username
    const password = req.body.password

    Admin.create({
        username: username,
        password: password
    })
    .then(function(){
        res.json({
            message: "Admin Created Succesful"
        })
    })
    .catch(function(){
        res.json({
            message:"OOPs Something Went Wrong"
        })
    })
})

router.post("/courses", adminMiddleware,function(req, res){
        const title = req.body.title
        const description = req.body.description
        const imageLink = req.body.imageLink
        const price = req.body.price
    Course.create({
        title: title,
        description : description,
        imageLink: imageLink,
        price: price
    })
    .then(function(){
        res.json({
            message: "Course Created Successfully",
            
            
        })
    })
    .catch(function(){
        res.json({
            message: "Opps Something went Wrong"
        })
    })
})

router.get("/courses", adminMiddleware, function(req, res){
      Course.find({

      }).then(function(response){
          res.json({
            courses: response
          })
      })
})

module.exports = router;