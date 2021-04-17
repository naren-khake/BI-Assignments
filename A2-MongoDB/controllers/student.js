import {Student} from "../models/student.js"        // import model


// for /add (post) to add student to database
export const addStudent = (req,res)=>
{
  const student1 = new Student(
      {
        studentFirstName: req.body.studentFirstName,
        collegeName: req.body.collegeName,
        location: req.body.location,
      })

student1.save()
    .then(
             (result)=>{  res.send('{"result" : "Success" }') } 
        )
    .catch( (err)=>{  console.log(err)} )       // if any error
}



//for /getStudentDetails (get) to getting studing by 
export const getStudent = (req,res)=>
{
    Student.aggregate(
        [{$match:{studentFirstName : req.query.name }}]
    )
    .then(
           (result)=>{res.send(result)}
        )
    .catch((err)=>{console.log(err)})
}