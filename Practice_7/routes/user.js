const {Router} = require("express")
const userMiddleware = require("../middleware/user")
const router = Router();

router.post("/signup", function(req, res){

})

router.get("/courses",function(req, res){

})

router.post("/courses/:courseId",userMiddleware,function(req, res){

})

router.get("/purchedCourses/",userMiddleware,function(req, res){

})

module.exports = router;