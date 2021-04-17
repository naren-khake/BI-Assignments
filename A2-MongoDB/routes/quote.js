import express from "express"
import {addQuote,getQuote} from "../controllers/quotes.js" 

const router = express.Router();

//pathnames
router.post("/add",addQuote);
router.get("/getAll",getQuote);

//export to start.js
export default router;