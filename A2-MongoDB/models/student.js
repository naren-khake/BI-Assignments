import mongoose from 'mongoose'
const Schema= mongoose.Schema

//Schema for Student
const studentSchema= new Schema(
    {
        studentFirstName:{type:String , required:true},
        collegeName:{type:String , required:true},
        location:{type:String , required:true}
    }, {timestamps:true})

export const Student=mongoose.model('Student',studentSchema)