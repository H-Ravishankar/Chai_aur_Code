const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://ravishankar:ravishankar@cluster0.ywxqxrd.mongodb.net/")

const AdminSchema = new mongoose.Schema({
      username: String,
      password: String,
})

const UserSchema = new mongoose.Schema({
       username: String, 
       password: String,
       purchesedCourses: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Course"
        }
       ]
})

const CourseSchema = new mongoose.Schema({
       title: String, 
       description: String,
       imageLink: String,
       Price: Number

})


const Admin = mongoose.model('Admin',AdminSchema)
const User = mongoose.model("User",UserSchema)
const Course = mongoose.model("Course",CourseSchema)


module.exports = {
    Admin, 
    User,
    Course
}