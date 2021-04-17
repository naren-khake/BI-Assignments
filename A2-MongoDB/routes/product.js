import express from "express"
import {addProduct,getProduct} from '../controllers/product.js'

const router = express.Router();

//pathnames
router.post("/add",addProduct);
router.get("/getAll",getProduct);

//export to start.js
export default router;