import express from "express"
import {addStudent,getStudent} from "../controllers/student.js"

const router = express.Router();

//pathnames
router.post("/add",addStudent);
router.get("/getStudentDetails",getStudent);

//export to start.js
export default router
